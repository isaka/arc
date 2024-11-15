---
title: Manual Setup
sidebar_position: 2
---

The Arc Framework can easily be setup with a few lines of code.

> Note: When using Spring Boot, it is recommended to use the [Arc Spring Boot Starter](/docs/spring) 
> so that all the following steps are done automatically.

### Loading Agents
The following shows how to load Scripted Arc Agents manually:

```kotlin
val chatCompleterProvider = ChatCompleterProvider { modelId ->
  // Return a ChatCompleter for the given model id
}

val beanProvider = SetBeanProvider(setOf(chatCompleterProvider))
val agentFactory = ChatAgentFactory(beanProvider)
val agentScriptEngine = KtsAgentScriptEngine()

val agentLoader = ScriptingAgentLoader(agentFactory, agentScriptEngine)
agentLoader.loadAgent("""
  agent {
     name = "simple-agent"
     model = { "modelId" }
     prompt {
      "You are a helpful agent." 
     }
  }
""") 

val loadedAgents = agentLoader.getAgents()
```

#### ChatCompleterProvider
The `ChatCompleterProvider` is a function that returns a `ChatCompleter` for a given model id.
The model id comes from the `model` field of an agent.

A `ChatCompleter` is the interface implemented by LLM clients. See the [Clients](/docs/clients) section for more details.

#### BeanProvider
The `BeanProvider` interface provides the beans that are used within the Arc Agents.
These beans can be accessed using the `get<BeanClass>()` method.

At least a `ChatCompleterProvider` must be provided to the `BeanProvider`.

#### ChatAgentFactory
The `ChatAgentFactory` is responsible for creating `ChatAgent` instances from the agent DSL. 

#### ScriptingAgentLoader
The `ScriptingAgentLoader` is responsible for loading agents from script files.
A powerful and flexible way of crafting Arc Agents is to use Kotlin Scripting.
In this case, the Arc Agent DSL is placed in Kotlin script files that can be loaded and executed dynamically
at runtime without restarting the application, i.e. "Hot Reloaded".

#### Hot Reloading Scripts
Scripts can be loaded from any source and passed to the `loadAgent` method as a string.
Alternatively, Agents can be loaded from a folder and reload automatically when the files are modified.

```kotlin
agentLoader.startHotReload(agentsFolder, hotReloadDelay)
```

> Note: In order for Agents Scripts to be correctly identified, their files must end with `.agent.kts` when containing Agents and
> `.functions.kts` when containing Functions. This will enable an IDE, such as the IntelliJ IDE,
> to provide syntax highlighting and code completion.

Once loaded, Scripted Agents are no different from Agents loaded by other
mechanisms.

### Executing Agents
Once an Agent is loaded, it can be executed by passing a `Conversation` object to the `execute` method.

```kotlin
 val agent = agentLoader.getAgentByName(agentName) as ChatAgent? ?: error("Agent not found!")
 val conversation = Conversation(User("anonymous")) + UserMessage("My question")
 val result = agent.execute(conversation).getOrNull()
```

See the [cookbook](/docs/cookbook/) for examples of Agent Scripts.