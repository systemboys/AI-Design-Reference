# Teste de Scroll-Bar

Projeto estatico para comparar estilos de barra de rolagem em `div`.

## Como abrir

Abra `index.html` diretamente no navegador.

Opcionalmente, rode um servidor local:

```bash
cd /home/marcos/Documentos/scroll-bar
python3 -m http.server 5177
```

Depois acesse:

```text
http://localhost:5177
```

## Observacoes

- Chrome, Edge e Safari usam as regras `::-webkit-scrollbar`.
- Firefox usa `scrollbar-width` e `scrollbar-color`, com menos controle visual.
- O exemplo do Stack Overflow era baseado em Angular/slimscroll, mas para testar o visual nao precisa npm.
