(function () {
  "use strict";

  var triggers = Array.prototype.slice.call(document.querySelectorAll("[data-pattern-target]"));
  var activeControls = Array.prototype.slice.call(document.querySelectorAll(".pattern-tab, .preview-tile"));
  var sections = Array.prototype.slice.call(document.querySelectorAll(".pattern[id]"));

  function setActive(targetId) {
    activeControls.forEach(function (control) {
      var isActive = control.getAttribute("data-pattern-target") === targetId;
      control.classList.toggle("is-active", isActive);
      if (isActive) {
        control.setAttribute("aria-current", "true");
      } else {
        control.removeAttribute("aria-current");
      }
    });
  }

  triggers.forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      var targetId = trigger.getAttribute("data-pattern-target");
      var target = targetId ? document.querySelector(targetId) : null;
      if (!target) {
        return;
      }
      setActive(targetId);
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      if (history.replaceState) {
        history.replaceState(null, "", targetId);
      }
    });
  });

  if ("IntersectionObserver" in window && sections.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          setActive("#" + entry.target.id);
        }
      });
    }, {
      rootMargin: "-40% 0px -48% 0px",
      threshold: 0.01
    });

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  if (window.location.hash && document.querySelector(window.location.hash)) {
    setActive(window.location.hash);
  }
}());
