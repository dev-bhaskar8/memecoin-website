import { motion } from 'framer-motion';
import { useState } from 'react';

function App() {
  const [tokenomics] = useState({
    totalSupply: '69,420,000,000,000',
    burned: '42.0%',
    liquidity: '31.9%',
    marketing: '13.37%',
    team: '12.69%'
  });

  const roadmap = [
    {
      phase: 'Phase 1: First Trimester ',
      items: [
        'Launch $PREGBILL (Morning sickness hits ATH!)',
        'First 1,000 HODLers get virtual ultrasound NFTs',
        'Start craving pickles & Microsoft shares',
        'Release "Is Bill Pregnant or Just Rich?" quiz game'
      ]
    },
    {
      phase: 'Phase 2: Second Trimester ',
      items: [
        'CoinGecko listing (Baby kicks crash the servers)',
        'Launch "BabyBump" price chart shaped like Bills belly',
        'Start "Guess Bills Due Date" prediction market',
        'Release maternity Windows theme pack'
      ]
    },
    {
      phase: 'Phase 3: DELIVERY TIME! ',
      items: [
        'Major exchange listings (Push harder than Windows updates!)',
        'Open "Pregnant Billionaire Support Group" DAO',
        'Release "Pregnant Bill Gates" mobile game',
        'Give birth to Web4.0 (Its twins!)'
      ]
    }
  ];

  const memeQuotes = [
    "Bill Gates: 'Is it a bull run or just the baby kicking?' 🫃",
    "Bill Gates’ due date got delayed—classic Windows update. ↻",
    "Downloading Baby.exe... Progress: 69% 👶",
    "Bill's Belly > Bitcoin Market Cap 📈"
  ];

  return (
    <div className="min-h-screen bg-dark overflow-x-hidden w-screen">
      <div className="w-full max-w-[1200px] mx-auto px-4 lg:px-8" style={{ maxWidth: 'min(1200px, 100%)' }}>
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold meme-shadow mb-4 text-white"
              animate={{ 
                scale: [1, 1.03, 1],
                y: [0, -2, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5,
                ease: "easeInOut"
              }}
            >
              $PREGBILL
            </motion.h1>
            <div className="flex flex-col items-center justify-center space-y-2 mb-8">
              <motion.p 
                className="text-2xl md:text-3xl text-white"
                animate={{ 
                  y: [0, -4, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5,
                  ease: "easeInOut"
                }}
              >
                The World's First Pregnant Billionaire! 🫃
              </motion.p>
              <motion.p 
                className="text-xl text-primary"
                animate={{ 
                  scale: [1, 1.05, 1], 
                  rotate: [0, 2, 0, -2, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2,
                  ease: "easeInOut"
                }}
              >
                "Conceived by Genius, Delivered to You!" - Pregnant Bill
              </motion.p>
            </div>
            <motion.img
              src="/bill-gates-pregnant.jpg"
              alt="Pregnant Bill Gates"
              className="pregnant-bill w-64 h-64 mx-auto rounded-full mb-8"
              whileHover={{ 
                scale: 1.1, 
                rotate: 360,
                transition: { duration: 0.7 }
              }}
              animate={{
                y: [0, -5, 0],
                transition: {
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut"
                }
              }}
            />
            <div className="space-x-4">
              <motion.a
                href="#"
                className="bg-primary text-dark px-6 py-3 rounded-full font-bold hover:opacity-80 transition inline-block"
                whileHover={{ 
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Impregnate Your Wallet! 🫃
              </motion.a>
              <motion.a
                href="#"
                className="bg-secondary text-white px-6 py-3 rounded-full font-bold hover:opacity-80 transition inline-block"
                whileHover={{ 
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Join Baby Shower! 🎈
              </motion.a>
            </div>
          </motion.div>
        </section>

        {/* Meme Quotes Section */}
        <section className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {memeQuotes.map((quote, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.02,
                  y: -3,
                  transition: { duration: 0.2 }
                }}
                className="bg-dark p-4 rounded-lg border-2 border-primary text-center"
              >
                <p className="text-xl text-white font-bold">{quote}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="py-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
            Why Is Bill PreGnant? 
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ 
                scale: 1.03,
                y: -3,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-dark p-6 rounded-lg border-2 border-primary"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">The Miracle </h3>
              <p className="text-lg text-white">
                Bill Gates didn't just get pregnant, he got MEGA PREGNANT! 
                Turns out eating too many Microsoft shares has side effects! 
                Now he's carrying the next big thing in crypto... literally!
              </p>
            </motion.div>
            <motion.div
              whileHover={{ 
                scale: 1.03,
                y: -3,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-dark p-6 rounded-lg border-2 border-secondary"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">The Journey </h3>
              <p className="text-lg text-white">
                Every buy is a contraction! Join us as we help Bill through 
                the world's first crypto pregnancy! Warning: May cause sympathy cravings for gains!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tokenomics Section */}
        <section className="py-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
            PreGnanomics 
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(tokenomics).map(([key, value]) => (
              <motion.div
                key={key}
                whileHover={{ 
                  scale: 1.02,
                  y: -3,
                  transition: { duration: 0.2 }
                }}
                className="text-center p-6 rounded-lg bg-dark border-2 border-primary"
              >
                <h3 className="text-xl font-bold mb-2 capitalize text-white">{key}</h3>
                <p className="text-2xl gradient-text">{value}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="py-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
            Labor Pains to Massive Gains 
          </h2>
          <div className="space-y-8">
            {roadmap.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ 
                  scale: 1.02,
                  y: -3,
                  transition: { duration: 0.2 }
                }}
                className="bg-dark p-6 rounded-lg border-2 border-secondary"
              >
                <h3 className="text-2xl font-bold mb-4 text-white">{phase.phase}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-center text-lg text-white">
                      <span className="mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center">
          <p className="text-lg text-white">
            $PREGBILL 2024 | Making Bill Gates' Belly Go To The Moon 🫃
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Not financial advice, but we're definitely expecting... massive gains! 📈
          </p>
          <div className="mt-4 space-x-6">
            <motion.a 
              href="#" 
              className="text-white hover:text-primary transition"
              whileHover={{ 
                scale: 1.1, 
                y: -3,
                transition: { 
                  type: "spring",
                  stiffness: 300
                }
              }}
            >
              Twitter (X-pecting) 🤰
            </motion.a>
            <motion.a 
              href="#" 
              className="text-white hover:text-primary transition"
              whileHover={{ 
                scale: 1.1, 
                y: -3,
                transition: { 
                  type: "spring",
                  stiffness: 300
                }
              }}
            >
              Telegram (Ultrasound Group) 🫃
            </motion.a>
            <motion.a 
              href="#" 
              className="text-white hover:text-primary transition"
              whileHover={{ 
                scale: 1.1, 
                y: -3,
                transition: { 
                  type: "spring",
                  stiffness: 300
                }
              }}
            >
              Discord (Delivery Room) 👶
            </motion.a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
