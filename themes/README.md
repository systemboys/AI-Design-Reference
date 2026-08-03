# Themes

Referências visuais dos temas Claro, Escuro e Sistema, incluindo o alternador de tema (theme selector) usado nos meus projetos.

## Referências Visuais

### Sistema

![theme selector - sistema](system/theme-selector-system-dark-background.png)

### Claro

![theme selector - claro](light/theme-selector-light-active.png)

### Escuro

![theme selector - escuro](dark/theme-selector-dark-active.png)

## Padrão do Alternador de Tema

- Controle segmentado em formato de pill, com 3 opções: Sistema, Claro e Escuro.
- Ícones: monitor (Sistema), sol (Claro), lua (Escuro).
- O item ativo tem fundo laranja com o ícone destacado; os itens inativos ficam apenas com o ícone em contorno, sem fundo.
- O fundo do controle acompanha o tema atualmente ativo (fundo escuro no tema dark, fundo claro no tema light).

## Prompt Pronto para Usar

Copie o bloco abaixo e cole no Claude Code, Codex ou outra ferramenta de IA para implementar esse padrão de tema no projeto atual.

```bash
Implemente um sistema de temas (claro, escuro e sistema) seguindo exatamente o padrao visual de referencia abaixo:

Referencias de imagem:
- /home/marcos/Documentos/Projects/AI-Design-Reference/themes/system/theme-selector-system-dark-background.png
- /home/marcos/Documentos/Projects/AI-Design-Reference/themes/light/theme-selector-light-active.png
- /home/marcos/Documentos/Projects/AI-Design-Reference/themes/dark/theme-selector-dark-active.png

Requisitos:
- Crie um alternador de tema (theme selector) em formato de pill/segmented control com 3 opcoes: Sistema, Claro e Escuro.
- Use os icones: monitor para Sistema, sol para Claro, lua para Escuro.
- O item ativo deve ter fundo laranja com o icone destacado; os itens inativos ficam apenas com o icone em contorno, sem fundo.
- O fundo do controle deve se adaptar ao tema atualmente ativo (fundo escuro quando o tema e dark, fundo claro quando o tema e light).
- Implemente a logica de troca de tema, persistindo a preferencia (ex: localStorage), e faca a opcao "Sistema" seguir a preferencia do SO (prefers-color-scheme).
- Aplique os tokens de cor do tema (light/dark) de forma consistente no restante da interface, nao apenas no seletor.
- Mantenha fidelidade visual as referencias (raio de borda, espacamento entre icones, tamanho do controle).

Ao concluir, compare visualmente o resultado com as imagens de referencia antes de considerar a tarefa finalizada.
```
