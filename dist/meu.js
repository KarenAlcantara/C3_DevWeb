"use strict";
var _a;
(_a = document.getElementById('jogar')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', comecar);
const cssNome = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Bege",
    "Bisque", "Preto", "BlanchedAlmond", "Azul", "BlueViolet", "Marrom", "BurlyWood", "CadetBlue",
    "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Carmesim", "Ciano",
    "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta",
    "DarkOliveGreen", "Darkorange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue",
    "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray",
    "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fúcsia", "Gainsboro", "GhostWhite",
    "Ouro", "GoldenRod", "Cinza", "Cinza", "Verde", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo",
    "Marfim", "Cáqui", "Lavanda", "LavandaBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral",
    "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue",
    "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta",
    "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue",
    "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin",
    "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen",
    "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple",
    "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Prata", "SkyBlue",
    "SlateBlue", "SlateGray", "SlateGrey", "Neve", "SpringGreen", "SteelBlue", "Bronzeado", "Teal", "Cardo", "Tomate", "Turquesa", "Violeta",
    "Trigo", "Branco", "WhiteSmoke", "Amarelo", "YellowGreen",];
function comecar() {
    var _a;
    let coresCSS = cssNome;
    let cores = [];
    let corSelecionada = '';
    let promptUsuario = '';
    let tentativas = 3;
    while (cores.length != 10) {
        cores.push(coresCSS[Math.floor((Math.random() * coresCSS.length) + 1)].toLowerCase());
        cores = [...new Set(cores)];
        cores.sort();
    }
    corSelecionada = cores[Math.floor((Math.random() * cores.length) + 1)];
    while (tentativas != 0) {
        promptUsuario = (_a = prompt(`Eu estou pensando em uma dessas cores:\n\n"${cores.join(', ')}"\n\nQual cor eu estou pensando?\n\nVidas: ${tentativas}`)) === null || _a === void 0 ? void 0 : _a.toLowerCase();
        if (promptUsuario.length === 0 || !promptUsuario.trim()) {
            alert('Por favor, digite uma cor!!');
        }
        else if (!cores.includes(promptUsuario)) {
            alert('Essa cor não está entre as 10 possiveis ou não existe!\n\nTente novamente');
        }
        else if (promptUsuario != corSelecionada) {
            dicas(corSelecionada, promptUsuario, tentativas);
            tentativas--;
        }
        else if (promptUsuario == corSelecionada) {
            alert('Você Ganhou!!');
            tentativas = 0;
        }
    }
    function dicas(x, y, v) {
        if (x.charCodeAt(0) > y.charCodeAt(0)) {
            if (v == 1) {
                alert(`Você perdeu! \n\nA correta era:\n${x}`);
            }
            else {
                alert('Resposta Errada\n\nDica é\n Sua cor é alfabéticamente menor que a minha\n\nTente novamente!');
            }
        }
        else {
            alert('Resposta Errada\n\nDica é Sua cor é alfabéticamente maior que a minha\n\nTente novamente!');
        }
    }
}
