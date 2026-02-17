
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

// Segments starting from Top (12 o'clock) and moving Clockwise
// The image has 8 segments. We need to map them correctly.
// Assuming standard mapping where 0 deg is at 3 o'clock or 12 o'clock depending on CSS. 
// Standard CSS rotate(0deg) points to 12 o'clock. 
// If the image is upright, 0deg is the top segment.
const prizes = [
    { label: '¡Vuelve a Intentar!', type: 'lose' },           // Segment 1 (Top)
    { label: '1 Tostón de 80g', type: 'win', code: 'DS80G' }, // Segment 2
    { label: 'Intenta la próxima vez', type: 'lose' },        // Segment 3
    { label: '1 Yuca', type: 'win', code: 'DSYUCA' },         // Segment 4
    { label: 'Intenta la próxima vez', type: 'lose' },        // Segment 5
    { label: '1 Tostón de 80g', type: 'win', code: 'DS80G' }, // Segment 6
    { label: 'Regalo Sorpresa', type: 'win', code: 'DSSURPRISE' }, // Segment 7
    { label: '1 Tostón de 28g', type: 'win', code: 'DS28G' }, // Segment 8
];

// Utility to generate sound effects using Web Audio API
const playSound = (type: 'tick' | 'win' | 'lose') => {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;

    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'tick') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(600, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
        osc.start();
        osc.stop(ctx.currentTime + 0.1);
    } else if (type === 'win') {
        const now = ctx.currentTime;
        // Simple winning arpeggio
        [440, 554, 659, 880].forEach((freq, i) => {
            const osc2 = ctx.createOscillator();
            const gain2 = ctx.createGain();
            osc2.connect(gain2);
            gain2.connect(ctx.destination);

            osc2.type = 'sine';
            osc2.frequency.value = freq;

            const time = now + (i * 0.1);
            gain2.gain.setValueAtTime(0, time);
            gain2.gain.linearRampToValueAtTime(0.2, time + 0.05);
            gain2.gain.exponentialRampToValueAtTime(0.01, time + 0.4);

            osc2.start(time);
            osc2.stop(time + 0.4);
        });
    } else if (type === 'lose') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(300, ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(100, ctx.currentTime + 0.4);
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.4);
        osc.start();
        osc.stop(ctx.currentTime + 0.4);
    }
};

const Roulette = () => {
    const [spinning, setSpinning] = useState(false);
    const [rotation, setRotation] = useState(0);
    const [result, setResult] = useState<{ label: string; type: string; code?: string } | null>(null);

    const spinWheel = () => {
        if (spinning) return;

        setSpinning(true);
        setResult(null);

        // Simulation of ticking sound
        let tickCount = 0;
        const totalTicks = 50; // Approximate number of simulared ticks
        const duration = 5000;

        // Use a cubic-bezier-like timing for ticks to match visual easing
        const playTicks = () => {
            const now = Date.now();
            const startTime = now;

            const tick = () => {
                const elapsed = Date.now() - startTime;
                const progress = elapsed / duration;

                if (progress >= 1) return;

                // Simple implementation: Tick more frequently in the middle, less at end
                // We'll just set random intervals that increase properly?
                // Actually, let's just use regular intervals that decay.
            };

            // Simpler simulated ticking pattern
            // Start fast, end slow
            let delay = 50;
            const runTick = () => {
                if (delay > 400) return; // Stop if too slow
                playSound('tick');
                delay = delay * 1.1; // Exponential slowdown
                if (delay < 400) setTimeout(runTick, delay);
            };
            runTick();
        };

        playTicks();

        // Random rotation logic
        // We want to land on a random segment.
        const segmentIndex = Math.floor(Math.random() * prizes.length);
        const segmentAngle = 360 / prizes.length;

        // Calculate target rotation to land on the chosen segment under the marker.
        // Marker is at top (0 degrees).
        // If segment 0 is at 0 degrees, we need 360 - 0 = 360/0 rotation.
        // If segment 1 is at 45 degrees, we need 360 - 45 = 315 rotation to bring it to top.
        const targetRotation = 360 - (segmentIndex * segmentAngle);

        // Add multiple full spins (5 to 10)
        const extraSpins = 360 * (5 + Math.floor(Math.random() * 5));

        // Add jitter within the segment (avoid edges)
        // Segment width is 45 deg. Safe zone is +/- 15 deg from center.
        const jitter = (Math.random() * 30) - 15;

        const finalRotation = extraSpins + targetRotation + jitter;

        // We accumulate rotation to keep spinning in one direction
        // If we just set `finalRotation`, it might spin backwards or reset.
        // We need to add to the *current* rotation, but ensuring the *end* result modulo 360 matches our target.
        // Current rotation modulo 360 is where we are.
        // Actually, simple way: strictly add to current rotation.
        // New Target = Current + (Full Spins) + (Distance to Target)
        // But Distance involves where we are now.

        // Simpler approach for React state: Just set a huge number that aligns correctly.
        // But to ensure smooth transition from current state, we use the `rotation` state as base.
        const currentRotationMod = rotation % 360;
        const distanceToTarget = targetRotation - currentRotationMod;
        // Normalize distance to be positive (forward spin)
        const forwardDistance = (distanceToTarget + 360) % 360;

        const totalSpin = extraSpins + forwardDistance + jitter;

        setRotation(rotation + totalSpin);

        setTimeout(() => {
            setSpinning(false);

            const winner = prizes[segmentIndex];
            setResult(winner);

            playSound(winner.type === 'win' ? 'win' : 'lose');

            if (winner.type === 'win') {
                confetti({
                    particleCount: 150,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#E61E25', '#F2C94C', '#ffffff']
                });
            }
        }, 5000);
    };

    return (
        <section className="py-20 bg-ds-light overflow-hidden relative">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-black text-ds-dark mb-4">
                        ¡Prueba tu <span className="text-ds-red">Suerte!</span>
                    </h2>
                    <p className="text-xl text-gray-600 mb-2">
                        Gira la ruleta y gana premios deliciosos al instante.
                    </p>
                    <p className="text-sm font-bold text-ds-red uppercase tracking-wider">
                        * Válido solo en puntos de degustación *
                    </p>
                </motion.div>

                <div className="relative w-96 h-96 md:w-[32rem] md:h-[32rem] lg:w-[36rem] lg:h-[36rem] mx-auto mb-12">
                    {/* Arrow Marker */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 z-20 drop-shadow-lg">
                        <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[40px] border-t-ds-dark"></div>
                    </div>

                    {/* Wheel Image */}
                    <motion.div
                        className="w-full h-full relative"
                        animate={{ rotate: rotation }}
                        transition={{ duration: 5, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        <Image
                            src="/roulette-wheel.png"
                            alt="Ruleta de Premios DS"
                            fill
                            className="object-contain drop-shadow-2xl"
                        />
                    </motion.div>


                </div>

                <button
                    onClick={spinWheel}
                    disabled={spinning}
                    className="bg-ds-yellow text-ds-dark text-xl font-bold py-4 px-12 rounded-full shadow-lg hover:bg-yellow-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all"
                >
                    {spinning ? 'Girando...' : '¡GIRAR AHORA!'}
                </button>

                {result && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-8 p-6 bg-white rounded-xl shadow-xl max-w-md mx-auto border-2 border-ds-yellow"
                    >
                        <div className="text-6xl mb-4">
                            {result.type === 'win' ? '🎉' : '😢'}
                        </div>
                        <h3 className="text-2xl font-bold mb-2">
                            {result.type === 'win' ? '¡GANASTE!' : '¡CASI!'}
                        </h3>
                        <p className="text-lg font-bold text-ds-red mb-2">
                            {result.label}
                        </p>
                        {result.type === 'win' && result.code && (
                            <div className="mt-4 bg-gray-100 p-3 rounded-lg font-mono font-bold text-ds-dark border border-dashed border-gray-300">
                                Presenta este código: <span className="text-ds-red select-all">{result.code}</span>
                            </div>
                        )}
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Roulette;
