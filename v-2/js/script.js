document.addEventListener("DOMContentLoaded", () => {
    // 1. Botão "Voltar ao Topo" Inteligente (aparece apenas ao rolar a página)
    const botoesTopo = document.querySelectorAll(".topo");

    botoesTopo.forEach(botao => {
        botao.style.opacity = "0";
        botao.style.visibility = "hidden";
        botao.style.transition = "opacity 0.3s ease, visibility 0.3s ease";
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            botoesTopo.forEach(botao => {
                botao.style.opacity = "1";
                botao.style.visibility = "visible";
            });
        } else {
            botoesTopo.forEach(botao => {
                botao.style.opacity = "0";
                botao.style.visibility = "hidden";
            });
        }
    });

    // 2. Rolagem suave personalizada para os links de navegação e topo
    const linksInternos = document.querySelectorAll('#nav-menu a, .topo');

    linksInternos.forEach(link => {
        link.addEventListener("click", function(e) {
            const destinoId = this.getAttribute("href");

            if (destinoId && destinoId.startsWith("#")) {
                e.preventDefault();
                const elementoDestino = document.querySelector(destinoId);

                if (elementoDestino) {
                    elementoDestino.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });

    // 3. Efeito Atmosférico Suave: Folha Maior, Cruz e Maraca (Quantidade Reduzida)
    const containerChuva = document.createElement("div");
    containerChuva.id = "efeito-elementos-sagrados";
    document.body.appendChild(containerChuva);

    const estiloChuva = document.createElement("style");
    estiloChuva.innerHTML = `
        #efeito-elementos-sagrados {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            overflow: hidden;
            z-index: 9999;
        }
        .item-sagrado {
            position: absolute;
            top: -10%;
            opacity: 0.35;
            animation: queda-sagrada linear infinite;
        }

        /* Folha Maior e Detalhada */
        .folha-grande {
            width: 24px;
            height: 14px;
            background-color: var(--verde-oliva);
            border-radius: 150% 0 150% 0;
            box-shadow: inset -2px -2px 4px rgba(0, 0, 0, 0.2);
        }

        /* Cruz Minimalista Dourada */
        .cruz {
            position: relative;
            width: 4px;
            height: 22px;
            background-color: var(--dourado);
            box-shadow: 0 0 5px var(--dourado-claro);
        }
        .cruz::before {
            content: '';
            position: absolute;
            top: 5px;
            left: -6px;
            width: 16px;
            height: 4px;
            background-color: var(--dourado);
        }

        /* Maraca (Corpo e cabo) */
        .maraca {
            position: relative;
            width: 10px;
            height: 24px;
        }
        .maraca::before {
            content: '';
            position: absolute;
            top: 0;
            left: -1px;
            width: 12px;
            height: 12px;
            background-color: var(--dourado);
            border-radius: 50%;
            box-shadow: 0 0 4px var(--dourado-claro);
        }
        .maraca::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 3px;
            width: 4px;
            height: 13px;
            background-color: var(--marrom-madeira);
            border-radius: 2px;
        }

        @keyframes queda-sagrada {
            0% {
                transform: translateY(0vh) translateX(0vw) rotate(0deg);
                opacity: 0.4;
            }
            50% {
                transform: translateY(50vh) translateX(2vw) rotate(180deg);
            }
            100% {
                transform: translateY(110vh) translateX(-2vw) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(estiloChuva);

    function criarItemSagrado() {
        const item = document.createElement("div");
        item.classList.add("item-sagrado");

        // Sorteia entre Folha Grande (0), Cruz (1) e Maraca (2)
        const sorteio = Math.floor(Math.random() * 3);
        if (sorteio === 0) {
            item.classList.add("folha-grande");
        } else if (sorteio === 1) {
            item.classList.add("cruz");
        } else {
            item.classList.add("maraca");
        }

        // Posição horizontal aleatória
        item.style.left = `${Math.random() * 100}vw`;
        
        // Queda bem lenta (entre 12s e 18s)
        const duracao = Math.random() * 6 + 12;
        item.style.animationDuration = `${duracao}s`;

        containerChuva.appendChild(item);

        // Remove o elemento após a queda para manter o código leve
        setTimeout(() => {
            item.remove();
        }, duracao * 1000);
    }

    // Intervalo de 2.5 segundos entre cada elemento para manter a quantidade baixa e sutil
    setInterval(criarItemSagrado, 2500);
});