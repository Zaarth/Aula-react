# Lista de Exercícios 02 - Respostas Objetivas

**Baseado nos conceitos sobre Tempo e Estados Globais, responda:**

## 1.1. Defina o que é o relógio lógico de Lamport e explique o problema que ele procura resolver. Diferencie tempo físico de tempo lógico.

### Relógio Lógico de Lamport
O relógio lógico de Lamport é um **contador de software** mantido por cada processo em um sistema distribuído, que estabelece uma ordem parcial consistente entre os eventos. Ele não mede o tempo físico, mas sim a **ordem causal** dos eventos.

### Problema Resolvido
O relógio de Lamport resolve o problema de como **ordenar eventos distribuídos de forma consistente** sem depender de um relógio físico global e perfeitamente sincronizado. Ele garante que, se um evento $e$ acontece antes de um evento $e'$ (relação *happens-before*), o *timestamp* lógico de $e$ será menor que o de $e'$ ($L(e) < L(e')$).

### Diferença entre Tempo Físico e Tempo Lógico

| Característica | Tempo Físico (Real) | Tempo Lógico (Lamport) |
| :--- | :--- | :--- |
| **Natureza** | Medido por relógios de hardware (ex: UTC, NTP). | Contador de software, representado por inteiros. |
| **Significado** | Absoluto; indica "que horas são" no mundo real. | Abstrato; indica a ordem causal dos eventos. |
| **Sincronização** | Requer algoritmos de sincronização (Cristian, Berkeley, NTP). | Calculado por regras de software (incremento local e ajuste no recebimento). |
| **Unidade** | Segundos, minutos, horas. | Sem unidade física; apenas um número de ordem. |

## 1.2. Apresente as regras do algoritmo de Lamport (inicialização, incremento local, atualização no recebimento de mensagem) e explique a propriedade *happened-before*.

### Regras do Algoritmo de Lamport
Cada processo $P_i$ mantém um relógio lógico $L_i$, inicializado em 0.

1.  **RL1 – Evento Local ou Envio:** Antes de qualquer evento (local, envio ou recebimento) no processo $P_i$, o relógio é incrementado:
    $$L_i := L_i + 1$$
2.  **RL2(a) – Envio de Mensagem:** Quando $P_i$ envia uma mensagem $m$, ele aplica a regra RL1 e anexa o valor atual de $L_i$ (o *timestamp* $t$) à mensagem.
3.  **RL2(b) – Recebimento de Mensagem:** Ao receber uma mensagem $(m, t)$ no processo $P_j$, ele primeiro ajusta seu relógio e depois o incrementa:
    $$L_j := \max(L_j, t) + 1$$

### Propriedade *Happens-Before* ($\rightarrow$)
A relação *happens-before* ($\rightarrow$) é a base da causalidade em sistemas distribuídos e é definida por três condições:

1.  **Eventos no mesmo processo (HB1):** Se $e$ e $e'$ são eventos no mesmo processo e $e$ ocorre antes de $e'$, então $e \rightarrow e'$.
2.  **Envio e Recebimento (HB2):** Se $e$ é o evento de envio de uma mensagem e $e'$ é o evento de recebimento dessa mesma mensagem, então $e \rightarrow e'$.
3.  **Transitividade (HB3):** Se $e \rightarrow f$ e $f \rightarrow g$, então $e \rightarrow g$.

O relógio de Lamport garante que, se $e \rightarrow e'$, então $L(e) < L(e')$, preservando a ordem causal.

## 1.3. Analise a imagem abaixo e explique os erros nas três situações apresentadas, com base nos conceitos sobre o ajuste do relógio de Lamport.

A imagem anexa ilustra três exemplos (A, B e C) que violam a regra de sincronização do relógio lógico de Lamport. A regra fundamental violada é a **Regra RL2(b)**:

> **Regra RL2(b) - Recebimento de Mensagem:** Ao receber uma mensagem $(m, t)$ no processo $P_j$, ele deve atualizar seu relógio para $L_j := \max(L_j, t) + 1$.

### Análise dos Erros

| Exemplo | Evento Crítico | Relógio Local ($L_j$) | Timestamp Recebido ($t$) | Valor Esperado ($\max(L_j, t) + 1$) | Valor Obtido | Erro |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **A** | Recebimento de $m_3$ em $P_2$ | 48 | 50 | $\max(48, 50) + 1 = 51$ | 56 | O processo $P_2$ ajustou seu relógio para 56, um valor maior que o necessário (51), violando a regra de ajuste mínimo. |
| **B** | Recebimento de $m_4$ em $P_1$ | 48 | 56 | $\max(48, 56) + 1 = 57$ | 54 | O processo $P_1$ ajustou seu relógio para 54, um valor **menor** que o necessário (57), violando a regra de ajuste mínimo. |
| **C** | Recebimento de $m_3$ em $P_2$ | 40 | 50 | $\max(40, 50) + 1 = 51$ | 48 | O processo $P_2$ ajustou seu relógio para 48, um valor **menor** que o necessário (51), violando a regra de ajuste mínimo. |

### Timestamps Corrigidos (Exemplo C como base)

Para demonstrar o funcionamento correto, o Exemplo C será corrigido, pois é o mais complexo em termos de causalidade.

| Evento | Processo | Relógio Antes | Mensagem Recebida ($t$) | Novo Relógio ($\max(L_j, t) + 1$) |
| :--- | :--- | :--- | :--- | :--- |
| Envio $m_1$ | $P_1$ | 6 | - | $6 + 1 = 7$ |
| Recebimento $m_1$ | $P_2$ | 8 | 7 | $\max(8, 7) + 1 = 9$ |
| Envio $m_2$ | $P_2$ | 16 | - | $16 + 1 = 17$ |
| Recebimento $m_2$ | $P_3$ | 20 | 17 | $\max(20, 17) + 1 = 21$ |
| Envio $m_3$ | $P_3$ | 50 | - | $50 + 1 = 51$ |
| Recebimento $m_3$ | $P_2$ | 40 | 51 | $\max(40, 51) + 1 = 52$ |
| Envio $m_4$ | $P_2$ | 51 | - | $51 + 1 = 52$ |
| Recebimento $m_4$ | $P_1$ | 42 | 52 | $\max(42, 52) + 1 = 53$ |

**Observação:** Os timestamps corrigidos para os eventos de envio/recebimento são: $m_1: (7, 9)$, $m_2: (17, 21)$, $m_3: (51, 52)$, $m_4: (52, 53)$.

## 1.4. Descreva o objetivo do Algoritmo de Berkeley e em que situações ele é utilizado.

### Objetivo
O Algoritmo de Berkeley é um método de **sincronização de relógios físicos** em sistemas distribuídos que **não assume a existência de uma fonte de tempo global precisa** (como um servidor de tempo externo ou GPS). Seu objetivo é manter os relógios de todas as máquinas sincronizados entre si, calculando uma média do tempo de todos os processos.

### Situações de Uso
É tipicamente utilizado em **redes locais (LANs) ou intranets** onde:
1.  Não há um receptor de tempo preciso (como GPS ou rádio) disponível.
2.  A precisão absoluta do tempo (em relação ao UTC) é menos importante do que a **concordância relativa** entre os relógios das máquinas.
3.  O sistema é pequeno o suficiente para que um único processo mestre possa coordenar a sincronização periodicamente.

## 1.5. Explique passo a passo o funcionamento: seleção do mestre, coleta de offsets, cálculo do ajuste (média/remoção de outliers) e envio do ajuste aos escravos.

O algoritmo de Berkeley opera em ciclos periódicos, coordenados por um processo mestre.

1.  **Seleção do Mestre:** Um processo é eleito como mestre (geralmente o que possui o menor ID ou o mais estável, embora o algoritmo não especifique rigidamente). Se o mestre falhar, um algoritmo de eleição (como o do Valentão ou Anel) é executado para escolher um novo.
2.  **Coleta de *Offsets* (Diferenças):**
    *   O mestre envia uma mensagem de consulta de tempo para todos os processos escravos.
    *   Cada escravo responde com o valor do seu relógio local.
    *   O mestre calcula o tempo de ida e volta (RTT) da mensagem para cada escravo e estima o *offset* (diferença) do relógio do escravo em relação ao seu próprio relógio, compensando o atraso da rede.
3.  **Cálculo do Ajuste:**
    *   O mestre coleta todos os tempos (o seu e os estimados dos escravos) e calcula uma **média** para determinar o tempo de referência do sistema.
    *   **Remoção de *Outliers*:** O mestre pode ignorar tempos que se desviem muito da média (relógios defeituosos ou muito lentos/rápidos) para evitar que eles distorçam o resultado.
    *   O ajuste para cada escravo é calculado como a diferença entre o tempo médio e o tempo atual do escravo.
4.  **Envio do Ajuste aos Escravos:**
    *   O mestre envia uma mensagem para cada escravo, informando o **valor de ajuste** (positivo ou negativo) que o escravo deve aplicar ao seu relógio.
    *   Os escravos ajustam seus relógios. Para evitar saltos no tempo (que podem causar problemas em aplicações), o ajuste é feito gradualmente (lentamente) ao longo de um período.

## 1.6. Em que cenários o algoritmo de Berkeley é preferível a protocolos baseados em tempo real (NTP)?

O Algoritmo de Berkeley é preferível ao Network Time Protocol (NTP) e outros protocolos baseados em tempo real (como o Algoritmo de Cristian) nos seguintes cenários:

| Cenário | Algoritmo de Berkeley | Protocolos Baseados em Tempo Real (NTP) |
| :--- | :--- | :--- |
| **Disponibilidade de Fonte Externa** | Preferível quando **não há uma fonte de tempo precisa e confiável** (como um servidor NTP ou GPS) disponível na rede. | Requer acesso a uma fonte de tempo externa (servidores de tempo de alta precisão). |
| **Objetivo de Sincronização** | O objetivo é a **concordância interna** (relativa) entre os relógios das máquinas. | O objetivo é a **precisão absoluta** (em relação ao UTC). |
| **Tolerância a Falhas** | Mais tolerante a falhas do servidor de tempo, pois o mestre pode ser reeleito e a média é mais robusta contra relógios defeituosos (outliers). | O algoritmo de Cristian, por exemplo, é centralizado e a falha do servidor de tempo paralisa a sincronização. |
| **Ambiente de Rede** | Ideal para **redes locais (LANs)** ou sistemas fechados onde a latência é baixa e previsível. | Projetado para funcionar em **redes de longa distância (WANs)** e na Internet, com latência variável. |

## 1.7. Crie uma ilustração que mostre o mestre e os escravos e os passos do ajuste.

| Passo | Mestre (M) | Escravo 1 ($E_1$) | Escravo 2 ($E_2$) |
| :--- | :--- | :--- | :--- |
| **1. Coleta** | Envia: "Qual é o seu tempo?" | Recebe a consulta. | Recebe a consulta. |
| **2. Resposta** | Recebe: $T_1$ (tempo de $E_1$) | Envia: $T_1$ | Envia: $T_2$ (tempo de $E_2$) |
| **3. Cálculo** | Calcula: $T_{avg} = \text{Média}(T_M, T_1, T_2)$ | - | - |
| **4. Ajuste** | Calcula ajuste: $\Delta_1 = T_{avg} - T_1$ | - | - |
| **5. Distribuição** | Envia: "Ajuste seu relógio em $\Delta_1$" | Recebe $\Delta_1$ e ajusta o relógio. | Recebe $\Delta_2$ e ajusta o relógio. |

## 2. Baseado nos conceitos sobre Coordenação e Acordo, responda:

## 2.1. Defina o problema da exclusão mútua em sistemas distribuídos e liste as propriedades desejáveis de um algoritmo (safety/segurança, ausência de deadlock, ausência de fome, justiça, eficiência em número de mensagens).

### Definição do Problema
O problema da **exclusão mútua** em sistemas distribuídos consiste em garantir que, a qualquer momento, **apenas um processo** possa acessar um recurso compartilhado crítico, conhecido como **região crítica (RC)**. Isso é essencial para manter a consistência dos dados e evitar condições de corrida (race conditions) em um ambiente onde múltiplos processos, executando em máquinas diferentes, competem pelo mesmo recurso.

### Propriedades Desejáveis de um Algoritmo de Exclusão Mútua

| Propriedade | Descrição |
| :--- | :--- |
| **Segurança (*Safety*)** | Garante que, a qualquer momento, no máximo um processo esteja executando na região crítica. Esta é a propriedade fundamental. |
| **Ausência de *Deadlock*** | Garante que dois ou mais processos que desejam entrar na região crítica não fiquem bloqueados indefinidamente, esperando um pelo outro. |
| **Ausência de Fome (*Starvation*)** | Garante que um processo que deseja entrar na região crítica eventualmente o fará, ou seja, nenhum processo será impedido de entrar indefinidamente. |
| **Justiça (*Fairness*)** | Garante que as requisições para entrar na região crítica sejam atendidas na ordem em que foram feitas (geralmente baseada em *timestamps* lógicos, como os de Lamport). |
| **Eficiência** | Medida pelo número de mensagens de rede necessárias para que um processo entre e saia da região crítica. Algoritmos mais eficientes minimizam a sobrecarga de comunicação. |

## 2.2. Desenhe uma ilustração de cenário que mostre como a exclusão mútua é garantida.

*Como não é possível desenhar diretamente, a ilustração é descrita em formato de tabela, representando o estado dos processos e do recurso.*

| Tempo | Processo 1 ($P_1$) | Processo 2 ($P_2$) | Processo 3 ($P_3$) | Recurso Compartilhado (RC) |
| :--- | :--- | :--- | :--- | :--- |
| $t_0$ | Requisita RC | Executando | Requisita RC | Livre |
| $t_1$ | **Entra na RC** | Executando | Esperando | **Ocupado por $P_1$** |
| $t_2$ | Executando na RC | Requisita RC | Esperando | **Ocupado por $P_1$** |
| $t_3$ | **Sai da RC** | Esperando | Esperando | Livre |
| $t_4$ | Executando | **Entra na RC** | Esperando | **Ocupado por $P_2$** |
| $t_5$ | Executando | **Sai da RC** | **Entra na RC** | **Ocupado por $P_3$** |

**Garantia:** Em $t_1$, $P_1$ entra na RC. Em $t_2$, $P_2$ requisita, mas deve esperar. A exclusão mútua é garantida porque o recurso nunca é acessado por mais de um processo simultaneamente.

## 2.3. Explique os princípios do algoritmo do valentão.

O Algoritmo do Valentão (*Bully Algorithm*) é um algoritmo de **eleição de coordenador** que assume que cada processo no sistema distribuído possui um **identificador (ID) único** e que a rede é confiável.

### Princípios
1.  **Hierarquia:** O processo com o **maior ID** é sempre o coordenador.
2.  **Início da Eleição:** Um processo $P$ inicia uma eleição quando:
    *   Ele percebe que o coordenador atual falhou (ex: não responde a uma requisição).
    *   Ele se recupera de uma falha.
3.  **Mensagens de Eleição:** O processo $P$ envia uma mensagem de **ELEIÇÃO** para todos os processos com IDs **maiores** que o seu.
4.  **Resposta OK:**
    *   Se um processo com ID maior recebe a mensagem de ELEIÇÃO, ele responde com uma mensagem **OK** e assume a responsabilidade de iniciar sua própria eleição.
    *   Se $P$ recebe uma mensagem OK, ele para de tentar se eleger e espera pela mensagem de Coordenador.
5.  **Vitória:** Se o processo $P$ não receber nenhuma mensagem OK após um tempo limite, ele se declara o novo coordenador e envia uma mensagem de **COORDENADOR** para todos os processos com IDs menores.
6.  **O "Valentão":** O processo com o maior ID que ainda está funcionando sempre vence a eleição, daí o nome "Valentão" (*Bully*).

## 2.4. Explique o problema de eleição de coordenador (*leader election*) e por que é necessário em sistemas distribuídos.

### Problema de Eleição de Coordenador
O problema de eleição de coordenador é o desafio de **designar um único processo** (o líder ou coordenador) para realizar uma tarefa de controle ou gerenciar um recurso compartilhado em um sistema distribuído.

### Necessidade em Sistemas Distribuídos
A eleição de um coordenador é necessária porque muitos algoritmos e serviços distribuídos exigem um **ponto de controle centralizado** para garantir a consistência, evitar conflitos e simplificar a lógica. Exemplos incluem:
*   **Exclusão Mútua:** Um coordenador pode gerenciar o acesso à região crítica.
*   **Sincronização de Relógios:** O Algoritmo de Berkeley requer um mestre (coordenador) para calcular e distribuir o tempo médio.
*   **Gerenciamento de Transações:** Um coordenador pode ser responsável por iniciar e finalizar transações distribuídas (ex: *Two-Phase Commit*).
*   **Tolerância a Falhas:** Quando o coordenador falha, um novo deve ser eleito para que o sistema continue operacional.

## 2.5. Crie uma ilustração (algoritmo do valentão) que mostre a eleição ocorrendo.

*Cenário: 5 processos ($P_1$ a $P_5$). $P_5$ é o coordenador. $P_5$ falha. $P_2$ detecta a falha e inicia a eleição.*

| Passo | Processo | Ação | Mensagens Enviadas |
| :--- | :--- | :--- | :--- |
| **1. Início** | $P_2$ | Detecta falha de $P_5$ e inicia eleição. | **ELEIÇÃO** para $P_3, P_4$ |
| **2. Resposta** | $P_3$ | Recebe ELEIÇÃO de $P_2$. | **OK** para $P_2$ |
| **3. Nova Eleição** | $P_3$ | Inicia sua própria eleição. | **ELEIÇÃO** para $P_4$ |
| **4. Resposta Final** | $P_4$ | Recebe ELEIÇÃO de $P_3$. | **OK** para $P_3$ |
| **5. Vitória** | $P_4$ | Não recebe OK de ninguém (pois $P_5$ falhou). | **COORDENADOR** para $P_1, P_2, P_3$ |
| **6. Reconhecimento** | $P_1, P_2, P_3$ | Recebem COORDENADOR e reconhecem $P_4$ como o novo líder. | - |

## 2.6. Explique os princípios do algoritmo do anel.

O Algoritmo do Anel (*Ring Algorithm*) é um algoritmo de **eleição de coordenador** que assume que os processos estão logicamente organizados em uma **estrutura de anel** (circular), onde cada processo conhece seu sucessor.

### Princípios
1.  **Estrutura:** Os processos são organizados em um anel lógico, com IDs únicos.
2.  **Início da Eleição:** Um processo $P$ inicia uma eleição quando detecta que o coordenador falhou.
3.  **Mensagem de Eleição:** $P$ cria uma mensagem de **ELEIÇÃO** contendo seu próprio ID e a envia para seu sucessor no anel.
4.  **Propagação:** Cada processo que recebe uma mensagem de ELEIÇÃO:
    *   Adiciona seu próprio ID à lista de IDs na mensagem.
    *   Encaminha a mensagem para seu sucessor.
5.  **Conclusão:** A mensagem de ELEIÇÃO circula pelo anel até retornar ao processo que a iniciou.
6.  **Vitória:** O processo iniciador examina a lista de IDs na mensagem que retornou e determina o processo com o **maior ID** como o novo coordenador.
7.  **Mensagem de Coordenador:** O processo iniciador envia uma mensagem de **COORDENADOR** (contendo o ID do vencedor) para todos os processos no anel, informando-os sobre o novo líder.

## 2.7. Descreva a versão por anel para eleição de líder e as diferenças conceituais em relação ao Algoritmo do Valentão.

### Versão por Anel para Eleição de Líder
A versão por anel é um processo de duas fases:
1.  **Fase de Eleição:** O processo que inicia a eleição envia uma mensagem de ELEIÇÃO contendo seu ID. A mensagem circula, coletando os IDs de todos os processos ativos.
2.  **Fase de Coordenador:** Quando a mensagem retorna ao iniciador, ele identifica o maior ID (o vencedor) e envia uma segunda mensagem (COORDENADOR) com o ID do vencedor para todos os processos, garantindo que todos saibam quem é o novo líder.

### Diferenças Conceituais em Relação ao Algoritmo do Valentão

| Característica | Algoritmo do Anel | Algoritmo do Valentão |
| :--- | :--- | :--- |
| **Topologia** | Requer uma **estrutura de anel lógico** (cada processo conhece apenas o sucessor). | Requer que cada processo conheça todos os processos com ID maior. |
| **Comunicação** | **Unidirecional** (a mensagem circula em uma direção). | **Broadcast seletivo** (mensagens enviadas apenas para processos com ID maior). |
| **Vencedor** | O vencedor é determinado **após a mensagem circular** e retornar ao iniciador. | O vencedor é determinado pelo **processo de maior ID que responde OK** (ou pela ausência de resposta). |
| **Eficiência (Mensagens)** | $2N$ mensagens (N para ELEIÇÃO, N para COORDENADOR), onde N é o número de processos. | Pode exigir até $O(N^2)$ mensagens no pior caso. |
| **Filosofia** | **Cooperativo:** Todos os processos participam da eleição e da determinação do vencedor. | **Competitivo:** O processo de maior ID "intimida" os outros para assumir o controle. |

## 2.8. Discuta pontos positivos e limitações do algoritmo do anel.

### Pontos Positivos
*   **Simplicidade:** O algoritmo é conceitualmente simples de implementar, exigindo apenas que cada processo conheça seu sucessor.
*   **Eficiência de Mensagens (Melhor Caso):** No melhor caso (quando o processo iniciador é o vizinho do processo de maior ID), a complexidade é baixa.
*   **Garantia de Eleição:** Garante que o processo com o maior ID ativo será eleito, desde que o anel esteja completo.

### Limitações
*   **Dependência da Topologia:** Requer que os processos estejam organizados em um anel lógico, e a falha de um link ou processo pode quebrar o anel, exigindo mecanismos adicionais de recuperação.
*   **Latência:** A eleição é lenta, pois a mensagem de ELEIÇÃO deve circular por todos os $N$ processos e retornar ao iniciador, e a mensagem de COORDENADOR deve circular novamente.
*   **Custo de Mensagens (Pior Caso):** Embora o número total de mensagens seja fixo ($2N$), a latência pode ser alta.
*   **Falha do Iniciador:** Se o processo iniciador falhar após enviar a mensagem de ELEIÇÃO, o algoritmo pode falhar ou exigir um mecanismo de *timeout* complexo para que outro processo inicie uma nova eleição.

## 2.9. Crie uma ilustração (algoritmo do anel) que mostre as mensagens e a eleição.

*Cenário: 4 processos ($P_1, P_2, P_3, P_4$) em um anel. $P_4$ é o coordenador e falha. $P_1$ detecta a falha e inicia a eleição.*

| Passo | Processo Ativo | Mensagem (ID's na lista) | Ação |
| :--- | :--- | :--- | :--- |
| **1. Início** | $P_1$ | ELEIÇÃO [1] | $P_1$ envia para $P_2$. |
| **2. Propagação** | $P_2$ | ELEIÇÃO [1, 2] | $P_2$ adiciona seu ID e envia para $P_3$. |
| **3. Propagação** | $P_3$ | ELEIÇÃO [1, 2, 3] | $P_3$ adiciona seu ID e envia para $P_1$. |
| **4. Conclusão** | $P_1$ | ELEIÇÃO [1, 2, 3] | $P_1$ recebe a mensagem de volta. |
| **5. Vitória** | $P_1$ | - | $P_1$ identifica o maior ID (3) e $P_3$ é o vencedor. |
| **6. Distribuição** | $P_1$ | COORDENADOR [3] | $P_1$ envia para $P_2$. |
| **7. Reconhecimento** | $P_2$ | COORDENADOR [3] | $P_2$ reconhece $P_3$ e envia para $P_3$. |
| **8. Fim** | $P_3$ | COORDENADOR [3] | $P_3$ reconhece a si mesmo como coordenador. |
