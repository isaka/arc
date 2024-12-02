// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

package ai.ancf.lmos.arc.assistants.support

import ai.ancf.lmos.arc.agents.conversation.ConversationClassification

/**
 * A classification to indicate that the agent was unavailable to resolve the user's request.
 */
object Unresolved : ConversationClassification {
    override fun toString() = "UNRESOLVED"
}

/**
 * A classification to indicate that the agent has handed over the conversation to a human agent.
 * This can be because the user explicitly asked for a human agent or because the agent detected
 * that it cannot resolve the user's request.
 */
object AgentHandover : ConversationClassification {
    override fun toString() = "AGENT_HANDOVER"
}
