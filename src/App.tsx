import './styles/main.scss';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
import { Element, Link } from 'react-scroll';
import { motion } from 'framer-motion';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app-container">
      {/* 固定的導航欄 */}
      <Navbar />
      <main>
        <Element name="home">
          <section className="home-section">
            <Home />
            <Link to="about" smooth={true} duration={800}>
              <div className="custom-arrow"></div> {/* V 形箭頭 */}
            </Link>
          </section>
        </Element>

        <Element name="about">
          <motion.section
            className="about-section"
            initial={{ opacity: 0 }} // 初始時完全透明，並稍微向右偏移 50px
            whileInView={{ opacity: 1, x: 0 }} // 進入視野後，淡入並回到原來的位置
            transition={{
              duration: 0.7, // 0.7 秒完成動畫
              ease: [0.5, 0.3, 0.15, 0.86], // 快速開始，慢慢停止
              delay: 0.2 // 延遲 0.3 秒後才開始動畫
            }}
            viewport={{ once: false, amount: 0.3 }} // 每次滾過來都觸發動畫
          >
            <About />
            <Link to="projects" smooth={true} duration={800}>
              <div className="custom-arrow"></div>
            </Link>
          </motion.section>
        </Element>

        <Element name="projects">
          <motion.section
            className="projects-section"
            initial={{ opacity: 0, }} // Projects 繼續使用淡入 + 向上動畫
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay:0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Projects />
          </motion.section>
        </Element>
      </main>
      {/* 頁腳 */}
      <Footer />
    </div>
  );
}

export default App;
