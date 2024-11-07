// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

package ai.ancf.lmos.arc.spring

import ai.ancf.lmos.arc.client.langchain4j.LangChainClient
import ai.ancf.lmos.arc.client.langchain4j.LangChainConfig
import ai.ancf.lmos.arc.client.langchain4j.builders.bedrockBuilder
import ai.ancf.lmos.arc.client.langchain4j.builders.geminiBuilder
import dev.langchain4j.model.bedrock.BedrockAnthropicMessageChatModel
import dev.langchain4j.model.googleai.GoogleAiGeminiChatModel
import org.springframework.boot.autoconfigure.condition.ConditionalOnClass
import org.springframework.context.annotation.Bean
import software.amazon.awssdk.auth.credentials.AwsCredentialsProvider

/**
 * Configuration for Langchain4j based LLM clients.
 */
@ConditionalOnClass(dev.langchain4j.model.chat.ChatLanguageModel::class)
class Langchain4jConfiguration {

    @Bean
    @ConditionalOnClass(BedrockAnthropicMessageChatModel::class)
    fun bedrockClient(awsCredentialsProvider: AwsCredentialsProvider? = null) =
        ClientBuilder { config, eventPublisher ->
            if (config.client != "bedrock") return@ClientBuilder null
            LangChainClient(
                LangChainConfig(
                    modelName = config.modelName,
                    url = config.url,
                    accessKeyId = config.accessKey,
                    secretAccessKey = config.accessSecret,
                    apiKey = null,
                ),
                bedrockBuilder(awsCredentialsProvider),
                eventPublisher,
            )
        }

    @Bean
    @ConditionalOnClass(GoogleAiGeminiChatModel::class)
    fun geminiClient() = ClientBuilder { config, eventPublisher ->
        if (config.client != "gemini") return@ClientBuilder null
        LangChainClient(
            LangChainConfig(
                modelName = config.modelName,
                url = config.url,
                accessKeyId = null,
                secretAccessKey = null,
                apiKey = config.apiKey,
            ),
            geminiBuilder(),
            eventPublisher,
        )
    }
}
