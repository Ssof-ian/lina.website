
    const reasons = [
      "1. I love your face.",
      "2. I love your smile.",
      "3. I love your mole (El khana).",
      "4. I love your hair.",
      "5. I love your voice.",
      "6. I love your accent.",
      "7. I love the way you say nichan.",
      "8. I love the way you wear your khimar.",
      "9. I love your style even when you said you don't have one",
      "10. I love the fact that you cry too easily",
      "11. I love your childhood pics",
      "12. I love your new pics.",
      "13. I love your kisses.",
      "14. I love your laugh.",
      "15. I love when you don't know what to say.",
      "16. I love when I teach you stuff.",
      '17. I love when you get shy.',
      "18. I love when you text me.",
      '19. I love when you worry about me.',
      "20. I just looooooove youuu.   ❤️"
    ];

    const container = document.getElementById("reasons-container");
    const finalMessage = document.getElementById("final-message");

    let index = 0;

    function showNextReason() {
        if (index < reasons.length) {
          const p = document.createElement("p");
          p.textContent = reasons[index];
          p.classList.add("reason");
          container.appendChild(p);
      
          // Fade in after short delay
          setTimeout(() => p.classList.add("visible"), 50);
      
          // ✅ Scroll to bottom after adding the new reason
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
          });
      
          index++;
          setTimeout(showNextReason, 2000); // Show next reason after 2s
        } else {
          // Show final message after all reasons
          setTimeout(() => finalMessage.classList.add("visible"), 1000);
        }
      }
      

    // Start the animation
    showNextReason();

    