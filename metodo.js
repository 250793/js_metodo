function replace() {
    var nome = 'José Ángelo Stefânio Antônio     ';
    console.log(`Nome original: ${nome}`)

    //Removendo espaços no final da linha 
    console.log(nome.trim())

    // Conta a quantidade de caracteres
    console.log(nome.length)

    // Conta a quantidade de caracteres sem espaços em branco
    console.log(nome.trim().length)

    // Retira os espaços em branco e depois converte tudo para minusculo
    console.log(nome.trim().toLowerCase())

    // Retira os espaços em branco e depois converte tudo para maisculo
    console.log(nome.trim().toUpperCase())

    //Substitui a string a ser procurada por outra, apenas no primeiro caractere encontrado
    console.log(nome.trim().replace('o', 'W'))

    //Substitui a string em todas as ocorrências
    console.log(nome.trim().replaceAll('o', 'W'))

    // Retorna a posição do indice do array da string
    console.log(nome.indexOf('elo'))

}
replace();