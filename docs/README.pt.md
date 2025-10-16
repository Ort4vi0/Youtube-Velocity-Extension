![Example Image](https://i.imgur.com/1zPxQVt.png)

# 🎬 Controle de Velocidade YouTube

Extensão para Chrome/Edge que adiciona um botão ao player do YouTube para controlar a velocidade do vídeo usando o scroll do mouse.

## ✨ Recursos

- 🖱️ **Controle por scroll**: Use a roda do mouse para ajustar a velocidade rapidamente
- 🎯 **Botão integrado**: Botão elegante que se integra perfeitamente aos controles do YouTube
- 🌍 **Suporte multilíngue**: Interface traduzida automaticamente para 16 idiomas
- ⚡ **Velocidades personalizadas**: Configure velocidades de 0.25x até 4x
- 🎮 **Compatível com barra de espaço**: Mantém sua velocidade personalizada ao usar a função de avanço rápido (barra de espaço)
- 💎 **Design moderno**: Tooltip com efeito de vidro fosco (glass effect)

## 📦 Instalação

### Método 1: Instalação Manual (Desenvolvedor)

1. **Baixe os arquivos**
   - Faça o download ou clone este repositório
   - Certifique-se de ter os seguintes arquivos:
     - `manifest.json`
     - `content.js`
     - `styles.css`

2. **Abra o Chrome/Edge**
   - Digite `chrome://extensions/` (Chrome) ou `edge://extensions/` (Edge) na barra de endereços
   - Pressione Enter

3. **Ative o Modo Desenvolvedor**
   - No canto superior direito, ative a opção "Modo do desenvolvedor"

4. **Carregue a extensão**
   - Clique em "Carregar sem compactação" (Chrome) ou "Carregar descompactada" (Edge)
   - Selecione a pasta contendo os arquivos da extensão

5. **Pronto!**
   - A extensão está instalada e funcionando
   - Acesse qualquer vídeo do YouTube para testar

## 🎯 Como Usar

### Controle Básico

1. **Abra um vídeo no YouTube**
   - Acesse [youtube.com](https://youtube.com)
   - Reproduza qualquer vídeo

2. **Localize o botão**
   - Procure pelo botão com a velocidade atual (ex: "1x", "2x") nos controles do player
   - Ele fica ao lado dos outros botões (volume, qualidade, etc.)

3. **Ajuste a velocidade**
   - Posicione o cursor sobre o botão de velocidade
   - **Scroll para cima** = aumenta a velocidade (+0.25x)
   - **Scroll para baixo** = diminui a velocidade (-0.25x)

### Recursos Avançados

#### 🎮 Função Barra de Espaço

O YouTube possui uma função nativa onde, ao segurar a barra de espaço, o vídeo acelera para 2x. Esta extensão melhora esse recurso:

- **Sem a extensão**: Ao soltar a barra de espaço, o vídeo volta para 1x
- **Com a extensão**: Ao soltar a barra de espaço, o vídeo volta para sua velocidade personalizada

**Exemplo:**
1. Configure o vídeo para 3x usando o scroll
2. Segure a barra de espaço (vai para 2x temporariamente)
3. Solte a barra de espaço (volta para 3x automaticamente)

#### 🌍 Idiomas Suportados

A extensão detecta automaticamente o idioma do seu navegador e exibe o tooltip no idioma correto:

- 🇧🇷 Português: "Alterar velocidade"
- 🇺🇸 Inglês: "Change speed"
- 🇪🇸 Espanhol: "Cambiar velocidad"
- 🇫🇷 Francês: "Modifier la vitesse"
- 🇩🇪 Alemão: "Geschwindigkeit ändern"
- 🇮🇹 Italiano: "Modifica velocità"
- 🇯🇵 Japonês: "速度を変更"
- 🇰🇷 Coreano: "속도 변경"
- 🇨🇳 Chinês: "更改速度"
- 🇷🇺 Russo: "Изменить скорость"
- 🇸🇦 Árabe: "تغيير السرعة"
- 🇮🇳 Hindi: "गति बदलें"
- 🇳🇱 Holandês: "Snelheid wijzigen"
- 🇵🇱 Polonês: "Zmień prędkość"
- 🇹🇷 Turco: "Hızı değiştir"

## ⚙️ Limites de Velocidade

- **Mínimo**: 0.25x (4x mais lento)
- **Máximo**: 4x (4x mais rápido)
- **Incremento**: 0.25x por scroll

## 🔧 Solução de Problemas

### A extensão não aparece no YouTube

1. Verifique se a extensão está ativa em `chrome://extensions/`
2. Recarregue a página do YouTube (F5)
3. Certifique-se de estar em uma página de vídeo (não na homepage)

### O botão não responde ao scroll

1. Certifique-se de que o cursor está sobre o botão de velocidade
2. Verifique se não há outras extensões conflitantes
3. Tente recarregar a extensão

### A velocidade não é mantida após a barra de espaço

1. Configure a velocidade usando o scroll da extensão (não pelo menu do YouTube)
2. Aguarde alguns segundos para a configuração ser salva
3. Teste novamente a barra de espaço

## 🛠️ Desenvolvimento

### Estrutura do Projeto

```
Youtube-Velocity-Extension/
├── manifest.json           # Configurações da extensão
├── README.md               # README principal (Inglês)
├── src/                    # Arquivos fonte
│   ├── content.js          # Script principal
│   ├── styles.css          # Estilos do botão e tooltip
│   ├── icon48.png          # Ícone da extensão 48x48
│   └── icon128.png         # Ícone da extensão 128x128
└── docs/                   # Documentação
    ├── README.pt.md        # README em Português
    └── README.es.md        # README em Espanhol
```

### Tecnologias Utilizadas

- **Manifest V3**: Última versão do sistema de extensões do Chrome
- **Content Scripts**: Injeção de código nas páginas do YouTube
- **MutationObserver**: Detecção dinâmica do player
- **CSS Backdrop Filter**: Efeito de vidro fosco no tooltip

## 📝 Licença

Este projeto é de código aberto. Sinta-se livre para usar, modificar e distribuir.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir novos recursos
- Enviar pull requests
- Traduzir para novos idiomas

## 📧 Suporte

Se encontrar algum problema ou tiver sugestões, abra uma issue no repositório.

---

Feito com ❤️ para melhorar sua experiência no YouTube
