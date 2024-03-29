# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. A seguir serão apresentados os diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

## Personas

||||
|:--:|:--:|:--:|
| ![Maria](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t2-checkit/blob/main/img/maria.png) | ![Joao](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t2-checkit/blob/main/img/joao.png)  | ![Luiza](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t2-checkit/blob/main/img/luiza.png) |
| **Maria, 32 anos, mãe e dona de casa** | **João, 28 anos, empresário** |  **Luíza, 24 anos, estudante**  |
| Maria é uma mãe ocupada que gerencia várias tarefas domésticas e familiares. |  João é um empresário ocupado que administra vários projetos ao mesmo tempo. | Luíza é uma estudante universitária que precisa gerenciar vários trabalhos e projetos ao mesmo tempo.  |



## Histórias de Usuários

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|:--------------------:|:------------------------------------:|:----------------------------------------:|
| Maria | procuro por uma solução   | para me ajudar a manter o controle das tarefas diárias e garantir que nada importante seja esquecido.  |
| Maria | facilidade de uso e flexibilidade  | para acessar listas de tarefas a partir de qualquer dispositivo |
| João | procuro por uma solução  | para manter o controle das tarefas relacionadas ao trabalho e garantir que nenhuma tarefa importante seja esquecida. |
| João | aplicação que priorize funcionalidades avançadas, como recursos de colaboração e notificações  |  para a gerenciar minhas tarefas de maneira eficiente.  |
| Luíza | procuro por uma solução   | para ajudar a manter o controle das minhas tarefas acadêmicas e garantir que nada fique seja esquecido.  |
| Luíza | aplicação que prioriza a facilidade de uso e a integração com outros aplicativos, como calendários  | para ajudar a equilibrar minha carga de trabalho.  |


## Modelagem do Processo de Negócio
Apresentamos nesta etapa a modelagem de processo no padrão BPMN com detalhes. Acesse o link: https://drive.google.com/file/d/1aIRG5La5lpWMNTS1IXgwjQrFwrzIF3i7/view?usp=sharing 
Caso queira, pode baixar também o arquivo no formato .bpmn: https://drive.google.com/file/d/1oORWitAnE-sgqi5Usf5WDWCmZ72xpwGL/view?usp=sharing
### Análise da Situação Atual

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional. 

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

Apresentamos aqui os nossos indicadores de desempenho e metas para o processo de negócio: https://drive.google.com/file/d/10tbHNV60vgrVPkYjugzqzFQxdJTvRwnZ/view?usp=sharing


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto, assim como sua prioridade.

### Requisitos Funcionais

|ID| Descrição do Requisito  | Prioridade |
|:------:|:-----------------------------------------:|:----:|
|RF-01| O usuário deve ser capaz de adicionar novas tarefas com um título e uma descrição opcional | ALTA | 
|RF-02| O usuário deve ser capaz de editar as informações de uma tarefa existente, incluindo o título e a descrição. | ALTA |
|RF-03| O usuário deve ser capaz de marcar uma tarefa como concluída e mudar seu status para "concluído". | MÉDIA |
|RF-04| O usuário deve ser capaz de excluir as tarefas que foram criadas anteriormente. | ALTA |
|RF-05| O sistema deve, na hora de criação da tarefa, deixar disponível (opcional ou obrigatório) a classificação do nível de prioridade daquela tarefa. | ALTA |
|RF-06|  Deverá exibir na board de tarefas dos usuários, as tarefas de acordo com os níveis de sua prioridade, como também poderá ordenar as tarefas de acordo com seu nível de prioridade.  | MÉDIA |
|RF-07| O usuário poderá escolher dentre alguns filtros como: tarefas concluídas, não concluídas, ordenação por data, crescente, decrescente.  | BAIXA |
|RF-08| O usuário deve ser capaz de adicionar uma data de vencimento opcional para cada tarefa para ajudá-lo a manter o controle do prazo.  | MÉDIA |
|RF-09| O sistema deve enviar notificações para o usuário quando uma tarefa se aproxima da data de vencimento. | BAIXA |


### Requisitos não Funcionais

|ID    | Descrição do Requisito  |Prioridade |
|:-------:|:-------------------------:|:----:|
|RNF-01| As informações sensíveis do usuário como senha, devem ser criptografadas  | ALTA | 
|RNF-02| O aplicativo deve estar disponível 24 horas 7 dias da semana | MÉDIA | 
|RNF-03| O aplicativo deve ter funcionalidades de fácil domínio  | ALTA |
|RNF-04| O sistema deve ter uma interface intuitiva e fácil de usar para que o usuário possa adicionar, editar e marcar tarefas concluídas com facilidade.  | ALTA |
|RNF-05| O sistema deve persistir dados, de forma que em situações de falha no app ou perda de conexão, informações importantes do usuário não se percam  | BAIXA |

## Restrições

|ID|Descrição do Requisito|
|:-------:|:-------------------------:|
|R-01| O Projeto deverá ser entregue em 26/06/2023  |
|R-02| Deverá ser utilizada Arquitetura Distribuída  |
|R-03| O solução do projeto deverá atender web e mobile|

## Documentação da Arquitetura
A Arquitetura Geral do CheckIt abranje  os seguintes padrões arquiteturais: Cliente-servidor e microsserviços.  

A aplicação fará o uso de uma API gateway, aonde será responsável por gerenciar e validar as requisições vindas do web app ou da aplicação mobile e redirecionado para um container de orquestração de microsserviços somente as requisições autenticadas por uma API externa.  

A API tem o propósito de realizar autenticação e validação dos usuários do APP, sendo um componente desacoplado da aplicação, como também algo seguro, flexível e prático. Para cumprir com tais características será utilizado a API OAuth do Google. 

<a href="https://ibb.co/C9K9fwd"><img src="https://i.ibb.co/T0M0swX/Green-Simple-UI-Design-Flowchart-Infographic-Graph.png" alt="Green-Simple-UI-Design-Flowchart-Infographic-Graph" border="0"></a>



### Descrição dos Microsserviços

- **Autenticação Externa -** Deve abstrair a complexidade da construção de um serviço de autenticação utilizando uma API externa para tal fim. Além de realizar a autenticação, também será utilizada afim de configurar as permissões de acesso aos recursos da aplicação. A API que será utilizada será OAuth do Google.  

- **API Gateway -** Fornece um ponto de acess aos microsserviços, disponibilizando interface para os clientes e definindo as rotas para da aplicação.  
 
- **Orquestrador -** Gerencia e coordena a comunicação entre os microsserviços, monitorando o desempenho e a disponibilidade, em caso de falhas, redirecionar solicitações para garantir a disponibilidade do serviço. 

- **Microsserviço Cadastro de Usuário -** Responsável por disponibilizar ao usuário as funcionalidades CRUD de cadastro na plataforma, caso o usuário não opte por autenticação via Google.

- **Microsserviço de Perfil de Usuário -** Responsável por gerenciar tudo que diz respeito ao perfil do usuário, como nome, foto, email e senha. 

- **Microsserviço de tarefas -** Responsável por disponibilizar as funcionalidades de CRUD para o usuário definir suas tarefas.  

- **Microsserviço de Projeto -** Responsável por implementar as operações de CRUD para os projetos. Possui a integração com os microsserviços de tarefas, pois as mesmas serão incluídas dentro dele. 

- **Microsserviços de Status -** Responsável por implementar os status de um projeto ou tarefa. 

- **Microsserviço de Histórico -** Responsável por exibir os dados referente ao projeto e tarefas vinculadas ao projeto, tais como descrição, datas e status. 

- **Microsserviço de Compartilhamento de Projetos –** Gerencia a relação dos usuários vinculados a um mesmo projeto, disponibilizando ferramentas para o próprio compartilhamento entre os usuários. 

- **Microsserviço de Notificações -** Gerencia as notificações referentes as tarefas e projetos com alertas para prazos de entrega, novas tarefas, conclusão de tarefas, status de prioridade  e quando um usuário é adicionado dentro de um projeto 

- **Banco de Dados de Usuários -** Responsável por armazenar os dados referentes ao microsserviço de cadastro de usuário, sendo utilizado um Banco de Dados Relacional. 

- **Banco de Dados da Aplicação -** Responsável por armazenamento dos dados dos microsserviços, sendo utilizado um Banco de Dados Não-Relacional para cada microsserviço. 


## Diagrama de Casos de Uso

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t2-checkit/blob/main/img/diagrama-de-caso-de-uso-checkit..png" alt="diagrama de caso de uso" width="500" />

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

![Matriz de Rastreabilidade do CheckIt](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t2-checkit/blob/190878f2e685bf1c5b02aa231f037aea48423b84/img/MatrizDeRastreabilidade.png)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.



## Gerenciamento de Tempo

Gerenciamento de Projeto  

	O presente projeto deve entregar uma aplicação distribuída com uma versão Web e outra versão mobile. Ambas versões deverão ser conectadas ao(s) mesmo(s) banco(s) de dados(s) através de uma ou várias API(s). 

	Primeiramente, objetivando gerenciar o projeto de forma eficiente, precisamos identificar todas as atividades necessárias para concluir o projeto, definir as depedenncias entre as atividades, estimar a duração de cada atividade, determinar os recursos necessários para cada atividade, estimar a disponibilidade de recursos durante o projeto, identificar os marcos importantes do projeto, identificar possíveis riscos que possam afetar o cronograma e desenvolver planos de contingência e definir um método para monitorar e controlar o cronograma ao longo do projeto. 

	Acessar o link: https://docs.google.com/document/d/1yGe1WwUbQiwMt1cQ6yJoxFqKIU_qQCYDjJVaENkpd7M/edit?usp=drivesdk
    Ver gráficos, orçamentos e demais dados.
!

