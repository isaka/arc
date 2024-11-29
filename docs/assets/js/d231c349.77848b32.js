"use strict";(self.webpackChunkarc=self.webpackChunkarc||[]).push([[7774],{8950:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"component_overview","title":"Component Overview","description":"The following explains the main components of the Arc Agent Framework.","source":"@site/docs/00-component_overview.md","sourceDirName":".","slug":"/component_overview","permalink":"/arc/docs/component_overview","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Component Overview","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Quickstart","permalink":"/arc/docs/quickstart"},"next":{"title":"Manual Setup","permalink":"/arc/docs/manual_setup"}}');var i=t(4848),o=t(8453);const s={title:"Component Overview",sidebar_position:2},a="Component Overview",c={},d=[{value:"Agent Interface",id:"agent-interface",level:3},{value:"ChatAgent",id:"chatagent",level:4},{value:"AgentProvider/LLMFunctionProvider Interface",id:"agentproviderllmfunctionprovider-interface",level:3},{value:"AgentLoader/LLMFunctionLoader Interface",id:"agentloaderllmfunctionloader-interface",level:3},{value:"AgentFactory Interface",id:"agentfactory-interface",level:3},{value:"ChatCompleter Interface",id:"chatcompleter-interface",level:3},{value:"ChatCompleterProvider Interface",id:"chatcompleterprovider-interface",level:3},{value:"BeanProvider Interface",id:"beanprovider-interface",level:3},{value:"Conversation Model",id:"conversation-model",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"component-overview",children:"Component Overview"})}),"\n",(0,i.jsx)(n.p,{children:"The following explains the main components of the Arc Agent Framework."}),"\n",(0,i.jsxs)(n.p,{children:["See the ",(0,i.jsx)(n.a,{href:"/docs/manual_setup",children:"Manual Setup"})," section for an example on how these components work together."]}),"\n",(0,i.jsx)(n.h3,{id:"agent-interface",children:"Agent Interface"}),"\n",(0,i.jsx)(n.p,{children:"The Agent interface is at the core of the Arc Framework and defines an Agent.\nThe interface is very generic allowing for different types of agents to be implemented."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"interface Agent<I, O> {\n\n    val name: String\n\n    val description: String\n\n    /**\n     * Executes the agent with the given input and context.\n     * The objects passed as the context can be accessed within the Agents DSL using DSLContext#context.\n     */\n    suspend fun execute(input: I, context: Set<Any> = emptySet()): Result<O, AgentFailedException>\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"chatagent",children:"ChatAgent"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"ChatAgent"})," is the main implementation of the Arc Agent interface."]}),"\n",(0,i.jsxs)(n.p,{children:["As the name suggests, ",(0,i.jsx)(n.code,{children:"ChatAgent"}),"s are agents that conduct a conversation with the client/user.\nThey take a ",(0,i.jsx)(n.code,{children:"Conversation"})," object as input and outputs the ",(0,i.jsx)(n.code,{children:"Conversation"})," containing a new message."]}),"\n",(0,i.jsxs)(n.p,{children:["See the ",(0,i.jsx)(n.a,{href:"#conversations",children:"Conversations"})," section for more details on conversations."]}),"\n",(0,i.jsx)(n.h3,{id:"agentproviderllmfunctionprovider-interface",children:"AgentProvider/LLMFunctionProvider Interface"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"AgentProvider"})," provides Agents to other components in an application\nand the ",(0,i.jsx)(n.code,{children:"LLMFunctionProvider"})," provides LLM functions to the Agents."]}),"\n",(0,i.jsxs)(n.p,{children:["These ",(0,i.jsx)(n.code,{children:"Providers"})," usually consolidate all ",(0,i.jsx)(n.code,{children:"Loaders"}),",\nsee ",(0,i.jsx)(n.a,{href:"#agentloaderllmfunctionloader-interface",children:"Loaders"}),", within an application.\nTherefore, each application should have at most one ",(0,i.jsx)(n.code,{children:"AgentProvider"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["When using the ",(0,i.jsx)(n.code,{children:"arc-spring-boot-starter"}),", the ",(0,i.jsx)(n.code,{children:"CompositeAgentProvider"})," and ",(0,i.jsx)(n.code,{children:"CompositeLLMFunctionProvider"}),"\nare automatically configured as the default ",(0,i.jsx)(n.code,{children:"Providers"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["These ",(0,i.jsx)(n.code,{children:"Providers"})," combine all ",(0,i.jsx)(n.code,{children:"AgentLoader"}),"s, ",(0,i.jsx)(n.code,{children:"LLMFunctionLoader"}),"s\nand any Agents or LLM functions that were injected directly into the Spring Context."]}),"\n",(0,i.jsx)(n.h3,{id:"agentloaderllmfunctionloader-interface",children:"AgentLoader/LLMFunctionLoader Interface"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"AgentLoader"}),"s and ",(0,i.jsx)(n.code,{children:"LLMFunctionLoader"}),"s create and load Agents and LLM functions respectively."]}),"\n",(0,i.jsxs)(n.p,{children:["Unlike ",(0,i.jsx)(n.code,{children:"Providers"}),", an application may have multiple ",(0,i.jsx)(n.code,{children:"Loader"}),"s."]}),"\n",(0,i.jsxs)(n.p,{children:["The common ",(0,i.jsx)(n.code,{children:"Loader"}),"s are the ",(0,i.jsx)(n.code,{children:"ScriptAgentLoader"})," and ",(0,i.jsx)(n.code,{children:"ScriptingLLMFunctionLoader"}),"\nthat loads Agents and functions from Kotlin scripts."]}),"\n",(0,i.jsxs)(n.p,{children:["Agents and functions can also be loaded as Spring Beans. See ",(0,i.jsx)(n.a,{href:"spring/agent-beans",children:"Spring Agent Beans"})]}),"\n",(0,i.jsx)(n.h3,{id:"agentfactory-interface",children:"AgentFactory Interface"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"AgentFactory"})," is responsible for converting Agents defined in the Agent DSL into an actual implementation."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:" /**\n  * Factory for creating agents from Agent Definitions.\n  */\n fun interface AgentFactory<T : Agent<*, *>> {\n     fun createAgent(agentDefinition: AgentDefinition): T\n }\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The most common implementation is the ",(0,i.jsx)(n.code,{children:"ChatAgentFactory"})," which creates ",(0,i.jsx)(n.code,{children:"ChatAgent"})," instances from the agent DSL."]}),"\n",(0,i.jsx)(n.h3,{id:"chatcompleter-interface",children:"ChatCompleter Interface"}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.code,{children:"ChatCompleter"})," generates a response to a given message.\nIn most cases, this interface is implemented by an LLM client."]}),"\n",(0,i.jsxs)(n.p,{children:["See the ",(0,i.jsx)(n.a,{href:"/docs/clients",children:"Clients"})," section for a list of supported clients."]}),"\n",(0,i.jsx)(n.h3,{id:"chatcompleterprovider-interface",children:"ChatCompleterProvider Interface"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"ChatCompleterProvider"})," simply provides a ",(0,i.jsx)(n.code,{children:"ChatCompleter"})," for a given model id.\nThe model id is defined in the ",(0,i.jsx)(n.code,{children:"model"})," field of an Agent."]}),"\n",(0,i.jsxs)(n.p,{children:["Note: It is up to the implementation of the ",(0,i.jsx)(n.code,{children:"ChatCompleterProvider"})," to decide\nhow to handle cases where a ",(0,i.jsx)(n.code,{children:"ChatCompleter"})," is not found for a given model id."]}),"\n",(0,i.jsxs)(n.p,{children:["Checkout the ",(0,i.jsx)(n.a,{href:"/docs/clients/langchain4j",children:"LangChain4J"})," client for an example of a ",(0,i.jsx)(n.code,{children:"ChatCompleterProvider"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"beanprovider-interface",children:"BeanProvider Interface"}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.code,{children:"BeanProvider"})," provides arbitrary beans that are used within the Arc Agent DSL."]}),"\n",(0,i.jsxs)(n.p,{children:["These beans can be accessed from anywhere within the Agent DSL using the ",(0,i.jsx)(n.code,{children:"get<BeanClass>()"})," method."]}),"\n",(0,i.jsx)(n.p,{children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'agent {\n    name = "weather-agent"\n    description = "A helpful assistant that can provide information about the weather."\n    prompt {\n        val weather = get<Weather>()\n        """\n         You are a helpful assistant that provides weather information.\n         The current weather is $weather.\n        """\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["When using the ",(0,i.jsx)(n.code,{children:"arc-spring-boot-starter"}),", a ",(0,i.jsx)(n.code,{children:"BeanProvider"})," providing access to all beans in the spring context is\nconfigured automatically."]}),"\n",(0,i.jsx)(n.h3,{id:"conversation-model",children:"Conversation Model"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"Conversation"})," object represents a conversation between a client and an Arc Agent, such as a ChatAgent.\nIt contains the entire transcript of the conversation, both client and agent messages,\nplus some metadata about the conversation."]}),"\n",(0,i.jsxs)(n.p,{children:["Each ",(0,i.jsx)(n.code,{children:"Conversation"})," object should be associated with a ",(0,i.jsx)(n.code,{children:"User"})," who acts as the owner of the conversation.\nThis prevents unauthorized users/clients from accessing a conversation.\nFurthermore, the ",(0,i.jsx)(n.code,{children:"User"})," id may also be used as a key to store user/client specific data."]}),"\n",(0,i.jsx)(n.p,{children:"Messages are usually be one of 2 types:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"UserMessage"})," - messages sent by the user/client."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"AssistantMessage"})," - messages generated by the Agent."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"SystemMessage"}),"s, messages that contain instructions for the Agent, are usually not store in the conversation\ntranscript."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var r=t(6540);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);