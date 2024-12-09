// SPDX-FileCopyrightText: 2024 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

package ai.ancf.lmos.arc.assistants.support

import ai.ancf.lmos.arc.agents.dsl.extensions.local
import ai.ancf.lmos.arc.agents.dsl.withDSLContext
import ai.ancf.lmos.arc.assistants.support.usecases.formatToString
import ai.ancf.lmos.arc.assistants.support.usecases.toUseCases
import kotlinx.coroutines.runBlocking
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test

class UseCaseParserTest : TestBase() {

    @Test
    fun `test use case parsing works`(): Unit = runBlocking {
        withDSLContext {
            val useCases = local("use_cases.md")!!.toUseCases()
            val expectedResult = local("use_cases_out.md")!!
            val parsedUseCases = useCases.formatToString()
            assertThat(parsedUseCases.trim()).isEqualTo(("#" + expectedResult.substringAfter("#")).trim()) // remove copyright
        }
    }

    @Test
    fun `test use case conditional lines work`(): Unit = runBlocking {
        withDSLContext {
            val useCases = local("use_cases.md")!!.toUseCases()
            val expectedResult = local("use_cases_mobile.md")!!
            val parsedUseCases = useCases.formatToString(conditions = setOf("mobile"))
            assertThat(parsedUseCases.trim()).isEqualTo(("#" + expectedResult.substringAfter("#")).trim()) // remove copyright
        }
    }
}
