<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $title ?? 'Dan.' }}</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&family=Outfit:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    
    <style>
        :root {
            --bg-base:      #0f0f0f;
            --accent:       #e05a00;
            --accent-glow:  rgba(224, 90, 0, 0.20);
            --glass-bg:     rgba(15, 15, 15, 0.45);
            --glass-border: rgba(224, 90, 0, 0.18);
            --glass-shine:  rgba(255, 255, 255, 0.06);
            --titlebar-bg:  rgba(10, 10, 10, 0.70);
            --menubar-bg:   rgba(12, 12, 12, 0.60);
            --body-bg:      rgba(8, 8, 18, 0.55);
            --text-primary: #f0f0f0;
            --text-sec:     #a0a0a0;
            --font-display: 'Outfit', sans-serif;
            --transition:   .25s cubic-bezier(.4,0,.2,1);
        }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: var(--font-display); background: var(--bg-base); color: var(--text-primary); min-height: 100vh; }

        /* HERO */
        .hero { min-height: 100vh; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; padding: 6rem 2rem 4rem; }
        .hero__grid-bg { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px); background-size: 48px 48px; mask-image: radial-gradient(ellipse 90% 80% at 50% 50%,black 20%,transparent 100%); pointer-events: none; }
        .hero::before { content: ''; position: absolute; top: 30%; left: 50%; transform: translateX(-50%); width: 700px; height: 500px; background: radial-gradient(ellipse,rgba(224,90,0,0.12) 0%,transparent 70%); pointer-events: none; }
        .hero__content { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; gap: 2.5rem; text-align: center; max-width: 680px; width: 100%; }
        .hero__greeting { display: flex; flex-direction: column; align-items: center; gap: .5rem; }
        .greeting-text { font-size: clamp(2.2rem,6vw,4rem); font-weight: 800; line-height: 1; animation: fadeSlideDown .8s ease both; }
        .greeting-text-static { color: var(--text-primary); }
        #hero-typewriter { color: var(--accent); }
        .greeting-sub { font-size: clamp(.9rem,2vw,1.1rem); font-weight: 300; color: var(--text-sec); letter-spacing: .08em; animation: fadeSlideDown .8s .15s ease both; }
        .hero__scroll-arrow { display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; color: var(--accent); border: 1px solid rgba(224,90,0,.35); border-radius: 50%; animation: fadeSlideUp .8s .5s ease both, bounce 2s 1.5s ease-in-out infinite; transition: background var(--transition); text-decoration: none; }
        .hero__scroll-arrow:hover { background: var(--accent-glow); }

        /* ══════════════════════════════════════
           GLASS POWERSHELL WINDOW
           ══════════════════════════════════════ */
        .ps-window {
            width: 100%;
            max-width: 580px;
            border-radius: 10px 10px 8px 8px;
            overflow: hidden;
            text-align: left !important;

            background: var(--glass-bg);
            backdrop-filter: blur(28px) saturate(1.6) brightness(1.1);
            -webkit-backdrop-filter: blur(28px) saturate(1.6) brightness(1.1);
            border: 1px solid var(--glass-border);
            border-top: 1px solid rgba(224,90,0,.30);
            box-shadow:
                0 0 0 1px rgba(0,0,0,.5),
                0 8px 32px rgba(0,0,0,.6),
                0 32px 80px rgba(0,0,0,.4),
                inset 0 1px 0 var(--glass-shine);
            animation: fadeSlideUp .8s .3s ease both;
        }

        /* Title Bar */
        .ps-titlebar { display: flex; align-items: center; justify-content: space-between; height: 34px; padding: 0 0 0 12px; background: var(--titlebar-bg); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(224,90,0,.12); user-select: none; }
        .ps-titlebar__left { display: flex; align-items: center; gap: 8px; }
        .ps-titlebar__icon { width: 16px; height: 16px; object-fit: contain; flex-shrink: 0; }
        .ps-titlebar__title { font-family: 'Segoe UI',system-ui,sans-serif; font-size: 12px; color: #cccccc; letter-spacing: .01em; }
        .ps-titlebar__controls { display: flex; height: 100%; }
        .ps-btn { width: 46px; height: 34px; display: flex; align-items: center; justify-content: center; border: none; background: transparent; color: #aaaaaa; font-size: 12px; cursor: pointer; transition: background .15s,color .15s; line-height: 1; }
        .ps-btn--min:hover, .ps-btn--max:hover { background: rgba(255,255,255,.08); color: #fff; }
        .ps-btn--close:hover { background: #c42b1c; color: #fff; }

        /* Menu Bar */
        .ps-menubar { display: flex; height: 26px; align-items: center; background: var(--menubar-bg); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(255,255,255,.05); padding: 0 8px; }
        .ps-menu-item { font-family: 'Segoe UI',system-ui,sans-serif; font-size: 12px; color: #999; padding: 0 9px; height: 100%; display: flex; align-items: center; cursor: pointer; border-radius: 4px; transition: background .15s,color .15s; }
        .ps-menu-item:hover { background: rgba(224,90,0,.15); color: var(--accent); }

        /* Terminal Body */
        .ps-body {
            background: var(--body-bg);
            padding: 12px 16px 16px 16px;
            font-family: 'Cascadia Code','Cascadia Mono','Consolas','Courier New',monospace;
            font-size: 13px;
            line-height: 1.6;
            min-height: 260px;
            text-align: left;
            direction: ltr;
            color: #d0d0d0;
            overflow-x: auto;
        }

        .ps-body * {
            text-align: left;
            margin: 0;
            padding: 0;
        }

        .ps-line {
            display: block;
            text-align: left;
            white-space: pre-wrap;
            word-break: break-word;
            margin: 0;
            padding: 0;
        }

        .ps-line * {
            display: inline;
            text-align: left;
            margin: 0;
            padding: 0;
        }

        .ps-spacer {
            display: block;
            height: 6px;
            margin: 0;
            padding: 0;
        }

        /* Syntax colors */
        .ps-copyright { color: #555555; font-size: 12px; }
        .ps-path      { color: #e05a00; font-weight: 600; }
        .ps-command   { color: #f0f0f0; font-weight: 500; }
        .ps-param     { color: #7da8c4; }
        .ps-arg       { color: #ff9a45; }
        .ps-output    { color: #d0d0d0; }
        .ps-cursor    { color: #e05a00; animation: blink-cursor 1.1s step-end infinite; font-weight: 700; }

        @keyframes blink-cursor  { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes fadeSlideDown { from{opacity:0;transform:translateY(-20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeSlideUp   { from{opacity:0;transform:translateY(20px)}  to{opacity:1;transform:translateY(0)} }
        @keyframes bounce        { 0%,100%{transform:translateY(0)} 50%{transform:translateY(9px)} }
    </style>
</head>
<body>
    @include('components.navbar')

    <main>
        @yield('content')
    </main>

    @include('components.footer')

    <script src="{{ asset('js/app.js') }}"></script>
    <script>
        // Typewriter effect
        const typewriterElement = document.getElementById('hero-typewriter');
        if (typewriterElement) {
            const words = [
                'Bagus Insan Pradana',
                'Audio Enthusiast',
                'Tech-Savvy',
                'at PENS',
                'Indonesian'
            ];

            let wordIndex = 0;
            let charIndex = 0;
            let isDeleting = false;

            function type() {
                const currentWord = words[wordIndex];

                if (!isDeleting) {
                    typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
                    charIndex++;

                    if (charIndex === currentWord.length) {
                        isDeleting = true;
                        setTimeout(type, 1800);
                        return;
                    }
                } else {
                    typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
                    charIndex--;

                    if (charIndex === 0) {
                        isDeleting = false;
                        wordIndex = (wordIndex + 1) % words.length;
                    }
                }

                setTimeout(type, isDeleting ? 55 : 90);
            }

            setTimeout(type, 1000);
        }
    </script>
</body>
</html>
