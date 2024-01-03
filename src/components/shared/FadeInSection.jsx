import { useEffect, useRef, useState } from "react"
/*eslint-disable */

const FadeInSection = (props) => {
  const [isVisible, setIsVisible] = useState(false)

  const domRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return (
    <section ref={domRef} className={`${props.className} ${isVisible? props.animate : 'animate-fade-out '} ` }>{props.children}</section>
  )
}

export default FadeInSection