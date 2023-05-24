arquivo package.json

  scripts

    "compile": "tsc",
    "watch": "tsc -w"


arquivo tsconfig.js

"compilerOptions" (configuração para compilar o arquivo)
"target" : "ES6" (compila em arquivo JS do ES6)
"outDir" : "dist/js" (coloca os arquivos nesse diretorio)

"include" (inclue pastas e arquivos )
"app/\*_/_" ( inclue pastas e subpastas da pasta app)

"noEmitOnError" (não ira compilar o codigo caso tenha um erro)


