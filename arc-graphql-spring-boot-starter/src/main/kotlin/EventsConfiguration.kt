// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

package ai.ancf.lmos.arc.graphql

import ai.ancf.lmos.arc.graphql.inbound.EventSubscription
import ai.ancf.lmos.arc.graphql.inbound.EventSubscriptionHolder
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration(proxyBeanMethods = false)
@ConditionalOnProperty("arc.subscriptions.events.enable", havingValue = "true")
open class EventsConfiguration {

    @Bean
    fun eventSubscriptionHolder() = EventSubscriptionHolder()

    @Bean
    fun eventSubscription(eventSubscriptionHolder: EventSubscriptionHolder) = EventSubscription(eventSubscriptionHolder)
}