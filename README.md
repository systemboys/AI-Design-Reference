# AI Design Reference

Biblioteca visual de referencias para desenvolvimento com IA.

Este repositorio funciona como um catalogo visual do meu proprio design system. Aqui ficam imagens de componentes, layouts, temas, animacoes, paletas, tipografia, icones e padroes de interface que devem ser usados como entrada de contexto para agentes de IA, como Claude Code, Codex ou qualquer outra ferramenta de desenvolvimento assistido por IA.

O objetivo nao e armazenar codigo final, mas sim modelos visuais claros para que uma IA consiga entender, reproduzir e manter consistencia nos padroes de design usados nos meus projetos.

## Como Usar

Ao trabalhar em uma interface com IA, use as imagens deste repositorio como referencia visual. Elas devem orientar decisoes como:

- estilo de componentes;
- espacamento e proporcao;
- hierarquia visual;
- temas claro, escuro e sistema;
- estados de interacao;
- padroes de layout;
- identidade visual de projetos especificos.

Essas referencias podem ser anexadas diretamente no prompt ou apontadas pelo caminho do arquivo quando a ferramenta permitir acesso ao sistema de arquivos.

## Estrutura

```text
AI-Design-Reference/
├── components/
│   ├── buttons/
│   ├── inputs/
│   ├── cards/
│   ├── modals/
│   └── navigation/
├── layouts/
│   ├── admin-panels/
│   ├── dashboards/
│   ├── landing-pages/
│   └── mobile/
├── themes/
│   ├── light/
│   ├── dark/
│   └── system/
├── animations/
├── typography/
├── color-palettes/
├── icons/
└── project-references/
    ├── breezy/
    ├── fibermap/
    ├── educore/
    └── jornal-de-mirador/
```

## Diretrizes Para Agentes de IA

Quando uma IA receber imagens deste repositorio como contexto, ela deve trata-las como referencias de design, nao como assets obrigatorios da interface final.

A IA deve:

- identificar os padroes visuais presentes nas imagens;
- reproduzir o estilo geral com fidelidade;
- manter consistencia com componentes e layouts ja catalogados;
- adaptar os padroes ao framework, stack ou projeto em desenvolvimento;
- preservar a intencao visual mesmo quando a implementacao tecnica for diferente.

A IA nao deve:

- copiar imagens como conteudo final sem necessidade;
- ignorar os padroes visuais fornecidos;
- misturar estilos conflitantes sem justificativa;
- tratar uma unica referencia isolada como regra absoluta quando houver outras referencias relacionadas.

## Convencao de Arquivos

Use nomes descritivos, em minusculas, separados por hifen.

Exemplos:

```text
theme-selector-light-active.png
theme-selector-dark-active.png
dashboard-sidebar-collapsed.png
button-primary-hover.png
card-project-summary.png
modal-confirm-delete.png
```

Sempre que possivel, o nome do arquivo deve indicar:

- o tipo de elemento;
- o estado visual;
- o tema;
- o contexto de uso.

## Categorias

### Components

Referencias de elementos reutilizaveis de interface, como botoes, inputs, cards, modais e navegacao.

### Layouts

Referencias de composicao de telas inteiras ou secoes maiores, como dashboards, paineis administrativos, landing pages e telas mobile.

### Themes

Referencias de aparencia para temas claro, escuro e sistema. Inclui exemplos de alternadores de tema, contraste, superficie, sombras e estados ativos.

### Animations

Referencias visuais ou sequenciais de movimento, transicoes, microinteracoes e comportamento animado.

### Typography

Referencias de hierarquia tipografica, escala, peso, alinhamento e combinacoes de texto.

### Color Palettes

Paletas e combinacoes de cores usadas como base visual para projetos e componentes.

### Icons

Referencias de estilo, peso, tamanho e uso de icones.

### Project References

Referencias especificas de projetos. Cada pasta representa um produto, site, sistema ou identidade visual propria.

## Finalidade

Este repositorio existe para reduzir ambiguidade em prompts de design e desenvolvimento com IA.

Em vez de descrever manualmente cada detalhe visual, as imagens aqui servem como fonte de contexto reutilizavel para que agentes de IA consigam construir interfaces mais consistentes com o meu gosto visual, meus produtos e meu sistema de design.
