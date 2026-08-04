# Scroll Bars Customizadas

Galeria de modelos de barra de rolagem customizada (CSS puro, sem lib externa), usada como referência para estilizar `overflow: auto/scroll` em vez de deixar a barra nativa do navegador.

O modelo padrão de uso é o **"Thin Light"**.

## Galeria de Modelos

Abra no navegador para ver e comparar todos os modelos lado a lado:

```text
/home/marcos/Documentos/Projects/AI-Design-Reference/components/scroll-bars/demo-2/index.html
```

Essa página (`demo-2`) contém 11 variações (Thin Light, Dark Rail, Dots, Flat Dark, Black Pill, Red Pill, Dotted Rail, Arrow Ends, Native Grey, e uma versão via overlay em JS), cada uma num card separado com o mesmo texto de exemplo, para comparação visual direta. `demo-1` é um teste anterior, mais simples, mantido só como histórico.

## Modelo Padrão: "Thin Light"

Barra fina (10px), trilho claro com uma faixa central mais escura (efeito de "sulco"), thumb arredondado (pill) com borda sutil, e setas discretas (▲/▼) nas pontas via gradiente CSS — sem imagem, só `linear-gradient`.

CSS de referência (`demo-2/styles.css`, seletor `.style-01`, aplicado sobre um contêiner com `overflow-y: auto`):

```css
.scroll-panel {
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-width: thin;
  scrollbar-color: #2b313a #f4f5f7; /* Firefox: thumb, track */
}

.scroll-panel::-webkit-scrollbar {
  width: 10px;
}

.scroll-panel::-webkit-scrollbar-track {
  background: linear-gradient(90deg, transparent 42%, #b8bec6 45%, #b8bec6 55%, transparent 58%);
}

.scroll-panel::-webkit-scrollbar-thumb {
  min-height: 54px;
  background: #cfd4da;
  border: 1px solid #a8afb8;
  border-radius: 999px;
}

.scroll-panel::-webkit-scrollbar-button:vertical:start:decrement {
  height: 14px;
  background: linear-gradient(135deg, transparent 50%, #5c6470 51%) 4px 6px / 6px 6px no-repeat;
}

.scroll-panel::-webkit-scrollbar-button:vertical:end:increment {
  height: 14px;
  background: linear-gradient(315deg, transparent 50%, #5c6470 51%) 4px 2px / 6px 6px no-repeat;
}
```

## Como Foi Implementado em Produção

Em vez de estilizar seletor por seletor no CSS de cada tela, o padrão real de implementação foi:

1. **Arquivo CSS dedicado** (ex: `src/utils/customScrollbars.css`), separado do CSS global do projeto, contendo só o estilo da barra de rolagem.
2. **Cores via variáveis CSS do tema do projeto** (`var(--color-border)`, `var(--color-text-muted)`, etc.) em vez de cores fixas do modelo de referência — assim a barra já se adapta sozinha ao tema claro/escuro sem precisar duplicar CSS por tema.
3. **Aplicação automática em áreas de rolagem já conhecidas do sistema**, listadas num único seletor `:where(...)` (menu lateral, área de conteúdo, corpo de modais, tabelas com scroll interno, painéis de popup, `textarea`) — qualquer elemento novo que precise do mesmo estilo só precisa entrar nessa lista, sem repetir as regras.
4. **Classe de opt-in manual** (ex: `.nome-do-projeto-thin-scrollbar`) para aplicar o mesmo estilo em um contêiner específico que não esteja na lista automática, sem precisar editar o seletor `:where(...)`.
5. **Estado de hover no thumb** (`::-webkit-scrollbar-thumb:hover`) escurecendo levemente a cor, para dar feedback de interatividade — não existe no modelo de referência original, é um acréscimo da implementação real.
6. Arquivo CSS importado uma única vez por um arquivo `.js`/`.ts` "vazio" (só com `import './customScrollbars.css'`), que por sua vez é importado uma única vez no componente raiz/layout do app (ex: `Sidebar`) — garante que o CSS entra no bundle sem precisar importar em cada arquivo que usa a barra.

## Prompt Pronto para Usar

Copie o bloco abaixo e cole no Claude Code, Codex ou outra ferramenta de IA para implementar a barra de rolagem customizada em um projeto novo.

```bash
Implemente uma barra de rolagem customizada no estilo "Thin Light", seguindo o padrao de referencia abaixo.

Referencia (abra no navegador para ver o modelo "Thin Light" e as demais variacoes disponiveis):
- /home/marcos/Documentos/Projects/AI-Design-Reference/components/scroll-bars/demo-2/index.html
- CSS de referencia do modelo "Thin Light": /home/marcos/Documentos/Projects/AI-Design-Reference/components/scroll-bars/demo-2/styles.css (seletor .style-01)

Requisitos:
- Crie um arquivo CSS dedicado (ex: utils/customScrollbars.css), separado do CSS global do projeto, com o estilo da barra "Thin Light": scrollbar-width: thin (Firefox) + scrollbar-color; e no WebKit, ::-webkit-scrollbar com largura ~10px, ::-webkit-scrollbar-track com o gradiente horizontal de "sulco" central, ::-webkit-scrollbar-thumb arredondado (border-radius alto, tipo pilula) com borda sutil, e ::-webkit-scrollbar-button:vertical:start/end com as setas via linear-gradient (sem imagem).
- Use as variaveis CSS de cor do tema do projeto atual (cor de borda, cor de texto secundario/muted) em vez de cores fixas, para a barra se adaptar automaticamente ao tema claro/escuro.
- Adicione um estado de hover no thumb (::-webkit-scrollbar-thumb:hover) escurecendo levemente a cor.
- Aplique o estilo automaticamente nas areas de rolagem conhecidas do sistema (menu lateral, area de conteudo principal, corpo de modais, tabelas com scroll interno, textareas) usando um unico seletor agrupado (:where(...) ou lista separada por virgula), em vez de repetir as regras por seletor.
- Crie tambem uma classe de opt-in manual (ex: .thin-scrollbar) para aplicar o mesmo estilo em um elemento especifico fora dessa lista.
- Importe esse CSS uma unica vez, a partir de um ponto central do app (ex: componente de layout raiz ou arquivo de entrada), nao em cada tela que usa a barra.

Ao concluir, compare visualmente o resultado com o modelo "Thin Light" da referencia antes de considerar a tarefa finalizada.
```
