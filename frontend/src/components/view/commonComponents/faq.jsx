import './faq.scss'

function FAQ(){
  return (
    <div className='campaign__faq' id='faq'>
        <h2>Frequently Asked Questions</h2>
        <div className="qna">
            <h3 className="question">How does the TW2 help stargaze in light-polluted cities?</h3  >
            <div className="answer">The TW2's advanced Starlight CMOS sensor and image processing capabilities allow it to capture clear and detailed images of nebulas and other celestial objects even in light-polluted urban areas.</div>

            <h3 className="question">Is the TW2 compatible with other telescopes?</h3  >
            <div className="answer">Yes, the DS1 image collector comes with a 1.25" interface and is compatible with 99% of other telescopes that have a 1.25" eyepiece. This means you can detach the DS1 from the TW2 and use it with your existing telescope setup, enhancing your stargazing experience with its advanced features and AI capabilities.</div>

            <h3 className="question">What does AI do in Finder TW2?</h3  >
            <div className="answer">The AI in Finder TW2 optimizes your stargazing experience by automatically adjusting image settings based on lighting and environmental conditions. It enhances image quality through noise reduction, color correction, and defogging, ensuring that you capture the clearest and most vibrant images possible without needing expert knowledge.</div>

            <h3 className="question">How does the AI technology enhance my photography experience?</h3  >
            <div className="answer">AI technology in the Finder TW2 simplifies astrophotography by automatically optimizing settings for the best possible images. It reduces noise, corrects colors, adjusts exposure, and even defogs the image, allowing you to capture stunning 4K photos and videos effortlessly. This means you spend more time enjoying the view and less time tweaking settings.</div>

            <h3 className="question">What makes the TW2 different from other telescopes?</h3  >
            <div className="answer">The Finder TW2 stands out with its state-of-the-art CMOS sensor and AI-enhanced planetary camera, offering 500x magnification and 4K image capture. Its built-in 5-inch touchscreen makes it incredibly user-friendly, and the AI technology ensures optimal image quality by adjusting settings based on conditions. It's a perfect blend of advanced technology and ease of use, ideal for both beginners and seasoned stargazers.</div>

            <h3 className="question">How portable is the TW2?</h3  >
            <div className="answer">The TW2 is designed to be incredibly portable and easy to transport weighing only 3.8kg. It comes with a tripod, a professional outdoor bag, and other accessories that make it convenient to take to different viewing locations.</div>
        </div>
    </div>
  )
}

export default FAQ