(function () {
  "use strict";

  var LP_META = {
    lp_id: "shikigami-ai-works-bright-home",
    lp_variant: "sakura-gateway-main"
  };

  var proofDetails = {
    github: {
      type: "Repository",
      title: "GitHubで見せるべき証拠",
      copy: "評価者が見たいのは、完成形だけではなく、失敗した試行、設計判断、検証ブランチ、READMEの再現手順です。",
      items: [
        "READMEに目的、入力、出力、制約、再現手順を置く",
        "issueまたはdocsに採用しなかった選択肢を残す",
        "デモではなく運用前提のエラー処理と評価ログを見せる"
      ]
    },
    articles: {
      type: "Article",
      title: "技術記事で見せるべき証拠",
      copy: "記事は実装の背景を補います。どの前提で何を試し、何が失敗し、次に何を変えたかまで書くと相談前の信頼になります。",
      items: [
        "LLM、RAG、エージェント、自動化の判断軸を言語化する",
        "成功例だけでなく、精度、速度、保守性の制約を書く",
        "記事末尾から相談フォームまたは関連リポジトリへ接続する"
      ]
    },
    slides: {
      type: "Slide",
      title: "登壇資料で見せるべき証拠",
      copy: "登壇資料は、技術を他者に説明できる力の証拠です。図解、比較表、導入判断、失敗パターンを短時間で読める形にします。",
      items: [
        "最初の3枚で対象者、課題、結論を示す",
        "検証構成、評価指標、運用上の注意を図にする",
        "資料から記事、GitHub、問い合わせへ迷わず移動できるようにする"
      ]
    },
    logs: {
      type: "Artifact",
      title: "検証ログで見せるべき証拠",
      copy: "AI領域では、動いた結果だけでなく、条件を変えた時に何が起きたかが重要です。検証ログは再現性と更新性を補強します。",
      items: [
        "入力データ、モデル、プロンプト、評価基準を分けて記録する",
        "失敗ログを隠さず、次の改善仮説と並べる",
        "公開できない情報は匿名化したサマリーに変換する"
      ]
    }
  };

  function pushEvent(eventName, params) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(Object.assign({}, LP_META, params || {}, { event: eventName }));
  }

  function qs(selector, root) {
    return (root || document).querySelector(selector);
  }

  function qsa(selector, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(selector));
  }

  function closeMobileNav() {
    var toggle = qs(".menu-toggle");
    document.body.classList.remove("nav-open");
    if (toggle) {
      toggle.setAttribute("aria-expanded", "false");
    }
  }

  function scrollToTarget(selector) {
    if (!selector || selector.charAt(0) !== "#") {
      return false;
    }
    var target = qs(selector);
    if (!target) {
      return false;
    }
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    if (history.pushState) {
      history.pushState(null, "", selector);
    }
    return true;
  }

  function setupNavigation() {
    var toggle = qs(".menu-toggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        var isOpen = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", String(!isOpen));
        document.body.classList.toggle("nav-open", !isOpen);
      });
    }

    qsa('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function (event) {
        var href = link.getAttribute("href");
        if (scrollToTarget(href)) {
          event.preventDefault();
          closeMobileNav();
        }
      });
    });
  }

  function setupTracking() {
    qsa("[data-track='cta']").forEach(function (element) {
      element.addEventListener("click", function () {
        pushEvent("cta_click", {
          cta_id: element.dataset.ctaId || "unknown",
          cta_label: element.textContent.trim(),
          section_id: element.dataset.sectionId || "unknown"
        });
      });
    });
  }

  function setupScrollDepth() {
    var thresholds = [25, 50, 75, 90];
    var reached = {};

    function checkDepth() {
      var documentHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );
      var viewportBottom = window.scrollY + window.innerHeight;
      var percent = Math.round((viewportBottom / documentHeight) * 100);
      thresholds.forEach(function (threshold) {
        if (!reached[threshold] && percent >= threshold) {
          reached[threshold] = true;
          pushEvent("scroll_depth", { percent: threshold });
        }
      });
      if (thresholds.every(function (threshold) { return reached[threshold]; })) {
        window.removeEventListener("scroll", onScroll);
      }
    }

    var scrollTimer = 0;
    function onScroll() {
      window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(checkDepth, 120);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    checkDepth();
  }

  function setupProofDialog() {
    var dialog = qs("#proof-dialog");
    if (!dialog) {
      return;
    }

    var title = qs("#proof-dialog-title", dialog);
    var type = qs("#proof-dialog-type", dialog);
    var copy = qs("#proof-dialog-copy", dialog);
    var list = qs("#proof-dialog-list", dialog);

    function fillDialog(proofId) {
      var detail = proofDetails[proofId];
      if (!detail) {
        return false;
      }
      type.textContent = detail.type;
      title.textContent = detail.title;
      copy.textContent = detail.copy;
      list.innerHTML = "";
      detail.items.forEach(function (item) {
        var li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
      });
      return true;
    }

    qsa("[data-proof-open]").forEach(function (button) {
      button.addEventListener("click", function () {
        var proofId = button.dataset.proofOpen;
        if (!fillDialog(proofId)) {
          return;
        }
        pushEvent("proof_click", {
          proof_type: proofDetails[proofId].type,
          proof_id: proofId,
          section_id: button.closest("section") ? button.closest("section").id || "proof_strip" : "proof_strip"
        });
        if (typeof dialog.showModal === "function") {
          dialog.showModal();
        } else {
          dialog.setAttribute("open", "");
        }
      });
    });

    qsa("[data-proof-close]", dialog).forEach(function (closeControl) {
      closeControl.addEventListener("click", function () {
        if (dialog.open && typeof dialog.close === "function") {
          dialog.close();
        } else {
          dialog.removeAttribute("open");
        }
      });
    });

    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) {
        dialog.close();
      }
    });
  }

  function setupFaqTracking() {
    qsa(".faq-list details").forEach(function (details) {
      details.addEventListener("toggle", function () {
        if (details.open) {
          pushEvent("faq_expand", {
            faq_id: details.dataset.faqId || "unknown"
          });
        }
      });
    });
  }

  function normalizeWhitespace(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function setupForm() {
    var form = qs("#lead-form");
    if (!form) {
      return;
    }

    var submitButton = qs(".lead-form__submit", form);
    var summary = qs("#form-summary", form);
    var summaryList = qs("#form-summary-list", form);
    var hasStarted = false;
    var isSubmitting = false;

    var fields = {
      leadType: qs("#lead-type", form),
      name: qs("#name", form),
      organization: qs("#organization", form),
      email: qs("#email", form),
      relatedUrl: qs("#related-url", form),
      timeline: qs("#timeline", form),
      message: qs("#message", form),
      privacy: qs("#privacy", form),
      website: qs("#website", form)
    };

    var labels = {
      leadType: "相談種別",
      name: "氏名",
      organization: "会社名・所属",
      email: "メールアドレス",
      relatedUrl: "関連URL",
      timeline: "希望時期",
      message: "相談内容",
      privacy: "個人情報の取扱いへの同意",
      website: "BOT確認"
    };

    function setFieldError(name, message) {
      var field = fields[name];
      var error = qs("#" + field.id + "-error", form);
      if (!error && name === "privacy") {
        error = qs("#privacy-error", form);
      }
      if (!field || !error) {
        return;
      }

      if (message) {
        field.setAttribute("aria-invalid", "true");
        var describedBy = [];
        if (qs("#" + field.id + "-help", form)) {
          describedBy.push(field.id + "-help");
        }
        describedBy.push(field.id + "-error");
        field.setAttribute("aria-describedby", describedBy.join(" "));
        error.textContent = message;
      } else {
        field.removeAttribute("aria-invalid");
        var help = qs("#" + field.id + "-help", form);
        if (help) {
          field.setAttribute("aria-describedby", field.id + "-help");
        } else {
          field.removeAttribute("aria-describedby");
        }
        error.textContent = "";
      }
    }

    function validateField(name) {
      var field = fields[name];
      if (!field) {
        return "";
      }

      var value = normalizeWhitespace(field.value);

      if (name === "leadType" && !value) {
        return "相談種別を選んでください。";
      }

      if (name === "name") {
        if (!value) {
          return "氏名を入力してください。";
        }
        if (value.length > 50) {
          return "氏名は50文字以内にしてください。";
        }
      }

      if (name === "organization" && value.length > 100) {
        return "会社名・所属は100文字以内にしてください。";
      }

      if (name === "email") {
        if (!value) {
          return "メールアドレスを入力してください。";
        }
        if (value.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return "メールアドレスの形式を確認してください。例: name@example.com";
        }
      }

      if (name === "relatedUrl" && value) {
        try {
          var url = new URL(value);
          if (url.protocol !== "https:" && url.protocol !== "http:") {
            return "関連URLは http または https で始まるURLにしてください。";
          }
        } catch (error) {
          return "関連URLは https:// から始まるURL形式にしてください。";
        }
      }

      if (name === "message") {
        if (!value) {
          return "相談内容を入力してください。";
        }
        if (value.length < 30) {
          return "相談内容は30文字以上で入力してください。背景、困っていること、試したことを書くと伝わりやすいです。";
        }
        if (value.length > 2000) {
          return "相談内容は2000文字以内にしてください。";
        }
      }

      if (name === "privacy" && !field.checked) {
        return "個人情報の取扱いを確認し、同意にチェックしてください。";
      }

      if (name === "website" && value) {
        return "送信を完了できませんでした。時間を置いて再度お試しください。";
      }

      return "";
    }

    function validateForm() {
      var errors = [];
      Object.keys(fields).forEach(function (name) {
        var message = validateField(name);
        setFieldError(name, message);
        if (message) {
          errors.push({
            name: name,
            label: labels[name],
            message: message
          });
        }
      });
      return errors;
    }

    function renderSummary(errors) {
      summaryList.innerHTML = "";
      if (!errors.length) {
        summary.hidden = true;
        return;
      }

      var ul = document.createElement("ul");
      errors.forEach(function (error) {
        var li = document.createElement("li");
        var button = document.createElement("button");
        button.type = "button";
        button.textContent = error.label + ": " + error.message;
        button.addEventListener("click", function () {
          fields[error.name].focus();
        });
        li.appendChild(button);
        ul.appendChild(li);
      });
      summaryList.appendChild(ul);
      summary.hidden = false;
    }

    qsa("input, select, textarea", form).forEach(function (field) {
      field.addEventListener("focus", function () {
        if (!hasStarted && field.name !== "website") {
          hasStarted = true;
          pushEvent("form_start", {
            form_id: "lead-form"
          });
        }
      });

      if (field.name !== "website") {
        field.addEventListener("blur", function () {
          setFieldError(field.name, validateField(field.name));
        });
      }
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (isSubmitting) {
        return;
      }

      pushEvent("form_submit", {
        form_id: "lead-form",
        status: "attempted"
      });

      var errors = validateForm();
      if (errors.length) {
        errors.forEach(function (error) {
          pushEvent("form_error", {
            form_id: "lead-form",
            field_name: error.name,
            error_type: error.message
          });
        });
        renderSummary(errors);
        fields[errors[0].name].focus();
        return;
      }

      renderSummary([]);
      isSubmitting = true;
      form.setAttribute("aria-busy", "true");
      submitButton.disabled = true;
      submitButton.textContent = "送信中です";

      window.setTimeout(function () {
        var leadId = "lead_" + Date.now().toString(36);
        var leadMeta = {
          lead_id: leadId,
          lead_type: fields.leadType.value,
          timeline: fields.timeline.value || "unspecified",
          has_related_url: Boolean(normalizeWhitespace(fields.relatedUrl.value)),
          submitted_at: new Date().toISOString(),
          tracked: false
        };
        sessionStorage.setItem("lpLeadSubmitted", JSON.stringify(leadMeta));
        pushEvent("form_submit", {
          form_id: "lead-form",
          status: "client_validated"
        });
        window.location.assign("thanks/index.html?v=sakura-gateway-20260622");
      }, 650);
    });
  }

  function setupThanksPage() {
    if (document.body.dataset.page !== "thanks") {
      return;
    }

    pushEvent("thanks_view", {
      page_path: window.location.pathname
    });

    var status = qs("[data-thanks-status]");
    var raw = sessionStorage.getItem("lpLeadSubmitted");
    if (!raw) {
      if (status) {
        status.textContent = "このページへ直接アクセスしています。問い合わせを送る場合はフォームへ戻ってください。";
      }
      return;
    }

    try {
      var leadMeta = JSON.parse(raw);
      if (!leadMeta.tracked) {
        pushEvent("generate_lead", {
          lead_source: "static_form",
          value: 1,
          currency: "JPY",
          lead_type: leadMeta.lead_type,
          timeline: leadMeta.timeline,
          has_related_url: leadMeta.has_related_url
        });
        leadMeta.tracked = true;
        sessionStorage.setItem("lpLeadSubmitted", JSON.stringify(leadMeta));
      }
      if (status) {
        status.textContent = "送信完了を確認しました。実運用では、この時点でサーバー側保存と通知処理を行います。";
      }
    } catch (error) {
      if (status) {
        status.textContent = "送信状態の確認に失敗しました。フォームへ戻って再度お試しください。";
      }
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    var page = document.body.dataset.page || "home";

    if (page === "home") {
      pushEvent("lp_view", {
        traffic_source: document.referrer ? "referral" : "direct"
      });
      setupScrollDepth();
      setupProofDialog();
      setupFaqTracking();
      setupForm();
    }

    setupNavigation();
    setupTracking();
    setupThanksPage();
  });
})();
