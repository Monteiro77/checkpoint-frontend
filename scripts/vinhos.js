function redirectWinePage(vinho) {
    if (vinho == 'touriga-cha') {
        valores = {
            nome: "Touriga Chã",
            tipo: "Branco",
            sobre: "Touriga Chã é um vinho tinto seco, potente e intenso. Apresenta notas de frutas vermelhas, toque herbáceo, tostado, manteiga, amêndoas e especiarias. Em boca, possui sensação de adstringência alta, boa acidez e ótima intensidade de sabor. Por ser um vinho intenso e estruturado, não é aconselhado para iniciantes, é indicado para paladares mais complexos e tradicionais. Touriga Cha é uma casta de uvas da espécie Vitis vinifera a partir da qual é fabricado vinho. Originária da região de Bordeaux, no sudoeste da França, ela é a uva vinífera mais difundida no mundo, encontrando-se em todas as zonas temperadas e quentes. É conhecida como 'a rainha das uvas tintas'.",
            safra: 2019,
            imagem: '../images/touriga-cha.jpg',
            preco: 129,
        };
    } else if(vinho == 'los-vinedos') {
        valores = {
            nome: "Los Vinedos",
            tipo: "Tinto",
            sobre: "Los Vinedos é um vinho tinto seco, potente e intenso. Apresenta notas de frutas vermelhas, toque herbáceo, tostado, manteiga, amêndoas e especiarias. Em boca, possui sensação de adstringência alta, boa acidez e ótima intensidade de sabor. Por ser um vinho intenso e estruturado, não é aconselhado para iniciantes, é indicado para paladares mais complexos e tradicionais. Touriga Cha é uma casta de uvas da espécie Vitis vinifera a partir da qual é fabricado vinho. Originária da região de Bordeaux, no sudoeste da França, ela é a uva vinífera mais difundida no mundo, encontrando-se em todas as zonas temperadas e quentes. É conhecida como 'a rainha das uvas tintas'.",
            safra: 2020,
            imagem: '../images/wine2.png',
            preco: 129,
        };
    } else if(vinho == 'cabernet-sauvignon') {
        valores = {
            nome: "Cabernet Sauvignon",
            tipo: "Tinto",
            sobre: "Cântico Cabernet Sauvignon é um vinho tinto seco, potente e intenso. Apresenta notas de frutas vermelhas, toque herbáceo, tostado, manteiga, amêndoas e especiarias. Em boca, possui sensação de adstringência alta, boa acidez e ótima intensidade de sabor. Por ser um vinho intenso e estruturado, não é aconselhado para iniciantes, é indicado para paladares mais complexos e tradicionais. Touriga Cha é uma casta de uvas da espécie Vitis vinifera a partir da qual é fabricado vinho. Originária da região de Bordeaux, no sudoeste da França, ela é a uva vinífera mais difundida no mundo, encontrando-se em todas as zonas temperadas e quentes. É conhecida como 'a rainha das uvas tintas'.",
            safra: 2018,
            imagem: "../images/wine.png",
            preco: 129,
        };
    } else {
        swal("Erro ao selecionar o vinho.", "Por favor, selecione novamente um vinho", "error");
    }
    sessionStorage.setItem("vinho_selecionado_nome", valores.nome);
    sessionStorage.setItem("vinho_selecionado_tipo", valores.tipo);
    sessionStorage.setItem("vinho_selecionado_sobre", valores.sobre);
    sessionStorage.setItem("vinho_selecionado_safra", valores.safra);
    sessionStorage.setItem("vinho_selecionado_imagem", valores.imagem);
    sessionStorage.setItem("vinho_selecionado_preco", valores.preco);
    window.location.assign("vinho_selecionado.html");
}