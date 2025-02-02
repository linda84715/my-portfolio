import './styles/main.scss';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';

function App() {
  const [currentSection, setCurrentSection] = useState(0); // 控制顯示的區塊
  const [isScrolling, setIsScrolling] = useState(false); // 控制滾動防抖

  const scrollHandler = (e: WheelEvent) => {
    if (isScrolling) return; // 防止重複滾動

    setIsScrolling(true);

    // 設置防抖延遲，防止滾動太快
    setTimeout(() => {
      setIsScrolling(false);
    }, 600); // 延遲時間 400ms

    if (e.deltaY > 0) {
      // 滾動向下，顯示下一個區塊
      if (currentSection < 2) {
        setCurrentSection(currentSection + 1);
      }
    } else {
      // 滾動向上，顯示上一個區塊
      if (currentSection > 0) {
        setCurrentSection(currentSection - 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', scrollHandler, { passive: true });

    return () => {
      window.removeEventListener('wheel', scrollHandler);
    };
  }, [currentSection, isScrolling]);

  return (
    <div className='app'>
      <div className='container'>
        {/* Navbar 固定在頂部 */}
        <Navbar />

        {/* Home 區塊 */}
        {currentSection === 0 && (
          <div className="home-section show">
            <Home />
            <button onClick={() => setCurrentSection(1)} className="arrow-btn">
              ⌄
            </button>
          </div>
        )}

        {/* About 區塊 */}
        {currentSection === 1 && (
          <div className="about-section show">
            <About />
            <button onClick={() => setCurrentSection(2)} className="arrow-btn">
              ⌄
            </button>
          </div>
        )}

        {/* Projects 區塊 */}
        {currentSection === 2 && (
          <div className="projects-section show">
            <Projects />
          </div>
        )}
      </div>

      {/* 只在 Projects 區塊下面顯示 Footer */}
      {currentSection === 2 && <Footer />}
    </div>
  );
}

export default App;