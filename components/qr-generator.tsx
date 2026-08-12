"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";
import {
  Check,
  Copy,
  Download,
  Languages,
  Link2,
  Moon,
  QrCode,
  Sun,
  Trash2,
} from "lucide-react";
import { useTheme } from "next-themes";

import {
  translations,
  type Language,
} from "@/lib/translations";

export default function QRGenerator() {
  const [language, setLanguage] =
    useState<Language>("en");

  const [content, setContent] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  const t = translations[language];

  /* -------------------------------- */
  /* INITIALIZE */
  /* -------------------------------- */

  useEffect(() => {
    setMounted(true);

    const savedLanguage =
      localStorage.getItem("qr-language");

    if (
      savedLanguage === "en" ||
      savedLanguage === "fa" ||
      savedLanguage === "ps"
    ) {
      setLanguage(savedLanguage);
    }
  }, []);

  /* -------------------------------- */
  /* LANGUAGE / RTL */
  /* -------------------------------- */

  useEffect(() => {
    document.documentElement.dir =
      t.direction;

    document.documentElement.lang =
      language;
  }, [language, t.direction]);

  /* -------------------------------- */
  /* GENERATE QR */
  /* -------------------------------- */

  useEffect(() => {
    if (!content.trim()) {
      setQrCode("");
      return;
    }

    const createQR = async () => {
      try {
        const result =
          await QRCode.toDataURL(content, {
            width: 900,
            margin: 2,
            errorCorrectionLevel: "H",

            color: {
              dark: "#111111",
              light: "#ffffff",
            },
          });

        setQrCode(result);
      } catch (error) {
        console.error(
          "Unable to generate QR code:",
          error
        );
      }
    };

    createQR();
  }, [content]);

  /* -------------------------------- */
  /* LANGUAGE */
  /* -------------------------------- */

  const changeLanguage = (
    newLanguage: Language
  ) => {
    setLanguage(newLanguage);

    localStorage.setItem(
      "qr-language",
      newLanguage
    );
  };

  /* -------------------------------- */
  /* DOWNLOAD */
  /* -------------------------------- */

  const handleDownload = () => {
    if (!qrCode) return;

    const anchor =
      document.createElement("a");

    anchor.href = qrCode;
    anchor.download = "qr-code.png";

    document.body.appendChild(anchor);

    anchor.click();

    document.body.removeChild(anchor);
  };

  /* -------------------------------- */
  /* COPY */
  /* -------------------------------- */

  const handleCopy = async () => {
    if (!content) return;

    try {
      await navigator.clipboard.writeText(
        content
      );

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch (error) {
      console.error(
        "Copy failed:",
        error
      );
    }
  };

  /* -------------------------------- */
  /* CLEAR */
  /* -------------------------------- */

  const handleClear = () => {
    setContent("");
    setQrCode("");
  };

  /* -------------------------------- */
  /* THEME */
  /* -------------------------------- */

  const toggleTheme = () => {
    setTheme(
      theme === "dark"
        ? "light"
        : "dark"
    );
  };

  /* -------------------------------- */
  /* UI */
  /* -------------------------------- */

  return (
    <main className="qr-page">
      <div className="qr-wrapper">

        {/* ============================== */}
        {/* NAVIGATION */}
        {/* ============================== */}

        <header className="qr-navigation">

          <div className="qr-logo">

            <div className="qr-logo-mark">
              <QrCode
                size={18}
                strokeWidth={2}
              />
            </div>

            <span>
              {t.brand}
            </span>

          </div>

          <div className="qr-navigation-right">

            {/* LANGUAGE */}

            <div className="language-switcher">

              <Languages size={15} />

              <select
                value={language}
                onChange={(event) =>
                  changeLanguage(
                    event.target
                      .value as Language
                  )
                }
                aria-label="Language"
              >

                <option value="en">
                  English
                </option>

                <option value="fa">
                  فارسی
                </option>

                <option value="ps">
                  پښتو
                </option>

              </select>

            </div>

            {/* PRIVATE */}

            <span className="privacy-status">

              <span className="privacy-dot" />

              {t.private}

            </span>

            {/* THEME */}

            {mounted && (
              <button
                type="button"
                className="theme-toggle"
                onClick={
                  toggleTheme
                }
                aria-label="Toggle theme"
              >

                {theme === "dark" ? (
                  <Sun
                    size={17}
                    strokeWidth={1.8}
                  />
                ) : (
                  <Moon
                    size={17}
                    strokeWidth={1.8}
                  />
                )}

              </button>
            )}

          </div>

        </header>

        {/* ============================== */}
        {/* INTRO */}
        {/* ============================== */}

        <section className="qr-intro">

          <div className="qr-intro-icon">

            <QrCode
              size={22}
              strokeWidth={1.6}
            />

          </div>

          <div className="qr-eyebrow">
            {t.eyebrow}
          </div>

          <h1>
            {t.title}
          </h1>

          <p>

            {t.subtitle}

            <br className="desktop-break" />

            {t.subtitleSecond}

          </p>

        </section>

        {/* ============================== */}
        {/* GENERATOR */}
        {/* ============================== */}

        <section className="qr-generator">

          {/* STEP 1 */}

          <div className="qr-step">

            <div className="step-header">

              <div className="step-number">
                {t.stepOne}
              </div>

              <div>

                <h2>
                  {t.enterContent}
                </h2>

                <p>
                  {t.enterContentDescription}
                </p>

              </div>

            </div>

            {/* LABEL */}

            <div className="content-label">

              <span>
                {t.contentLabel}
              </span>

              <span>
                {content.length}{" "}
                {t.characters}
              </span>

            </div>

            {/* INPUT */}

            <div className="content-input">

              <div className="content-input-icon">

                <Link2
                  size={19}
                  strokeWidth={1.7}
                />

              </div>

              <textarea
                value={content}
                onChange={(event) =>
                  setContent(
                    event.target.value
                  )
                }
                placeholder={
                  t.placeholder
                }
                aria-label={
                  t.contentLabel
                }
                spellCheck={false}
              />

              {content && (
                <button
                  type="button"
                  className="clear-input"
                  onClick={
                    handleClear
                  }
                  aria-label={
                    t.clear
                  }
                >

                  <Trash2
                    size={15}
                  />

                </button>
              )}

            </div>

            {/* ACTIONS */}

            <div className="generator-actions">

              <button
                type="button"
                className="generate-button"
                disabled={
                  !content.trim()
                }
                onClick={() => {
                  document
                    .getElementById(
                      "qr-result"
                    )
                    ?.scrollIntoView({
                      behavior:
                        "smooth",
                      block:
                        "center",
                    });
                }}
              >

                <QrCode size={17} />

                {t.generate}

              </button>

              {content && (
                <button
                  type="button"
                  className="clear-button"
                  onClick={
                    handleClear
                  }
                >
                  {t.clear}
                </button>
              )}

            </div>

          </div>

          {/* DIVIDER */}

          <div className="step-divider" />

          {/* STEP 2 */}

          <div
            className="qr-step qr-step-result"
            id="qr-result"
          >

            <div className="step-header">

              <div className="step-number">
                {t.stepTwo}
              </div>

              <div>

                <h2>
                  {t.yourQRCode}
                </h2>

                <p>
                  {t.qrDescription}
                </p>

              </div>

            </div>

            {/* QR RESULT */}

            <div className="qr-result-area">

              {qrCode ? (

                <div className="qr-generated">

                  <div className="qr-paper">

                    <img
                      src={qrCode}
                      alt={
                        t.yourQRCode
                      }
                    />

                  </div>

                  <div className="qr-ready">

                    <span className="ready-icon">

                      <Check
                        size={13}
                      />

                    </span>

                    <span>
                      {t.qrReady}
                    </span>

                  </div>

                </div>

              ) : (

                <div className="qr-empty">

                  <div className="qr-empty-icon">

                    <QrCode
                      size={36}
                      strokeWidth={1.25}
                    />

                  </div>

                  <h3>
                    {t.qrEmptyTitle}
                  </h3>

                  <p>
                    {
                      t.qrEmptyDescription
                    }
                  </p>

                </div>

              )}

            </div>

            {/* RESULT BUTTONS */}

            <div className="result-actions">

              <button
                type="button"
                className="download-button"
                disabled={!qrCode}
                onClick={
                  handleDownload
                }
              >

                <Download
                  size={17}
                />

                {t.download}

              </button>

              <button
                type="button"
                className="copy-button"
                disabled={!content}
                onClick={
                  handleCopy
                }
              >

                {copied ? (
                  <>
                    <Check
                      size={17}
                    />

                    {t.copied}
                  </>
                ) : (
                  <>
                    <Copy
                      size={17}
                    />

                    {t.copy}
                  </>
                )}

              </button>

            </div>

          </div>

        </section>

      </div>
    </main>
  );
}