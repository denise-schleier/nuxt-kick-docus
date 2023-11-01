const e=Object.freeze({name:"apex",scopeName:"source.apex",fileTypes:["apex","cls","trigger"],uuid:"F5FC6824-F257-43B1-B53A-14E1CCD18631",patterns:[{include:"#javadoc-comment"},{include:"#comment"},{include:"#directives"},{include:"#declarations"},{include:"#script-top-level"}],repository:{directives:{patterns:[{include:"#punctuation-semicolon"}]},declarations:{patterns:[{include:"#type-declarations"},{include:"#punctuation-semicolon"}]},"script-top-level":{patterns:[{include:"#method-declaration"},{include:"#statement"},{include:"#punctuation-semicolon"}]},"type-declarations":{patterns:[{include:"#javadoc-comment"},{include:"#comment"},{include:"#annotation-declaration"},{include:"#storage-modifier"},{include:"#sharing-modifier"},{include:"#class-declaration"},{include:"#enum-declaration"},{include:"#interface-declaration"},{include:"#trigger-declaration"},{include:"#punctuation-semicolon"}]},"class-or-trigger-members":{patterns:[{include:"#javadoc-comment"},{include:"#comment"},{include:"#storage-modifier"},{include:"#sharing-modifier"},{include:"#type-declarations"},{include:"#field-declaration"},{include:"#property-declaration"},{include:"#indexer-declaration"},{include:"#variable-initializer"},{include:"#constructor-declaration"},{include:"#method-declaration"},{include:"#punctuation-semicolon"}]},"interface-members":{patterns:[{include:"#javadoc-comment"},{include:"#comment"},{include:"#property-declaration"},{include:"#indexer-declaration"},{include:"#method-declaration"},{include:"#punctuation-semicolon"}]},statement:{patterns:[{include:"#comment"},{include:"#while-statement"},{include:"#do-statement"},{include:"#for-statement"},{include:"#switch-statement"},{include:"#when-else-statement"},{include:"#when-sobject-statement"},{include:"#when-statement"},{include:"#when-multiple-statement"},{include:"#if-statement"},{include:"#else-part"},{include:"#goto-statement"},{include:"#return-statement"},{include:"#break-or-continue-statement"},{include:"#throw-statement"},{include:"#try-statement"},{include:"#soql-query-expression"},{include:"#local-declaration"},{include:"#block"},{include:"#expression"},{include:"#punctuation-semicolon"}]},expression:{patterns:[{include:"#comment"},{include:"#merge-expression"},{include:"#support-expression"},{include:"#throw-expression"},{include:"#this-expression"},{include:"#trigger-context-declaration"},{include:"#conditional-operator"},{include:"#expression-operators"},{include:"#soql-query-expression"},{include:"#object-creation-expression"},{include:"#array-creation-expression"},{include:"#invocation-expression"},{include:"#member-access-expression"},{include:"#element-access-expression"},{include:"#cast-expression"},{include:"#literal"},{include:"#parenthesized-expression"},{include:"#initializer-expression"},{include:"#identifier"}]},"annotation-declaration":{begin:"([@][_[:alpha:]]+)\\b",beginCaptures:{1:{name:"storage.type.annotation.apex"}},end:"(?<=\\)|$)",patterns:[{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.apex"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.apex"}},patterns:[{include:"#expression"}]},{include:"#statement"}]},"support-expression":{begin:`(?x)
(ApexPages|Database|DMLException|Exception|PageReference|Savepoint|SchedulableContext|Schema|SObject|System|Test)(?=\\.|\\s) # supported apex namespaces`,beginCaptures:{1:{name:"support.class.apex"}},end:"(?<=\\)|$)|(?=\\})|(?=;)|(?=\\)|(?=\\]))|(?=\\,)",patterns:[{include:"#support-type"},{match:"(?:(\\.))([[:alpha:]]*)(?=\\()",captures:{1:{name:"punctuation.accessor.apex"},2:{name:"support.function.apex"}}},{match:"(?:(\\.))([[:alpha:]]+)",captures:{1:{name:"punctuation.accessor.apex"},2:{name:"support.type.apex"}}},{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.apex"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.apex"}},patterns:[{include:"#expression"},{include:"#punctuation-comma"}]},{include:"#comment"},{include:"#statement"}]},"support-type":{name:"support.apex",patterns:[{include:"#comment"},{include:"#support-class"},{include:"#support-functions"},{include:"#support-name"}]},"support-class":{match:"\\b(ApexPages|Database|DMLException|Exception|PageReference|Savepoint|SchedulableContext|Schema|SObject|System|Test)\\b",captures:{1:{name:"support.class.apex"}}},"support-functions":{match:"\\b(delete|execute|finish|insert|start|undelete|update|upsert)\\b",captures:{1:{name:"support.function.apex"}}},"support-name":{patterns:[{match:"(\\.)\\s*([[:alpha:]]*)(?=\\()",captures:{1:{name:"punctuation.accessor.apex"},2:{name:"support.function.apex"}}},{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.apex"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.apex"}},patterns:[{include:"#expression"},{include:"#punctuation-comma"}]},{match:"(\\.)\\s*([_[:alpha:]]*)",captures:{1:{name:"punctuation.accessor.apex"},2:{name:"support.type.apex"}}}]},"support-arguments":{begin:"<",beginCaptures:{0:{name:"punctuation.definition.typeparameters.begin.apex"}},end:">",endCaptures:{0:{name:"punctuation.definition.typeparameters.end.apex"}},patterns:[{include:"#comment"},{include:"#support-type"},{include:"#punctuation-comma"}]},"merge-expression":{begin:"(merge)\\b\\s+",beginCaptures:{1:{name:"support.function.apex"}},end:"(?<=\\;)",patterns:[{include:"#object-creation-expression"},{include:"#merge-type-statement"},{include:"#expression"},{include:"#punctuation-semicolon"}]},"merge-type-statement":{match:"([_[:alpha:]]*)\\b\\s+([_[:alpha:]]*)\\b\\s*(\\;)",captures:{1:{name:"variable.other.readwrite.apex"},2:{name:"variable.other.readwrite.apex"},3:{name:"punctuation.terminator.statement.apex"}}},"sharing-modifier":{name:"sharing.modifier.apex",match:"(?<!\\.)\\b(with sharing|without sharing|inherited sharing)\\b"},"storage-modifier":{name:"storage.modifier.apex",match:"(?<!\\.)\\b(new|public|protected|private|abstract|virtual|override|global|static|final|transient)\\b"},"class-declaration":{begin:"(?=\\bclass\\b)",end:"(?<=\\})",patterns:[{begin:`(?x)
\\b(class)\\b\\s+
(@?[_[:alpha:]][_[:alnum:]]*)\\s*`,beginCaptures:{1:{name:"keyword.other.class.apex"},2:{name:"entity.name.type.class.apex"}},end:"(?=\\{)",patterns:[{include:"#javadoc-comment"},{include:"#comment"},{include:"#type-parameter-list"},{include:"#extends-class"},{include:"#implements-class"}]},{begin:"\\{",beginCaptures:{0:{name:"punctuation.curlybrace.open.apex"}},end:"\\}",endCaptures:{0:{name:"punctuation.curlybrace.close.apex"}},patterns:[{include:"#class-or-trigger-members"}]},{include:"#javadoc-comment"},{include:"#comment"}]},"trigger-declaration":{begin:"(?=\\btrigger\\b)",end:"(?<=\\})",patterns:[{begin:`(?x)
\\b(trigger)\\b\\s+
(@?[_[:alpha:]][_[:alnum:]]*)\\s*
\\b(on)\\b\\s+
([_[:alpha:]][_[:alnum:]]*)\\s*`,beginCaptures:{1:{name:"keyword.other.trigger.apex"},2:{name:"entity.name.type.trigger.apex"},3:{name:"keyword.operator.trigger.on.apex"},4:{name:"storage.type.apex"}},end:"(?=\\{)",patterns:[{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.apex"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.apex"}},patterns:[{include:"#trigger-type-statement"},{include:"#trigger-operator-statement"},{include:"#punctuation-comma"},{include:"#expression"}]},{include:"#javadoc-comment"},{include:"#comment"},{include:"#type-parameter-list"}]},{begin:"\\{",beginCaptures:{0:{name:"punctuation.curlybrace.open.apex"}},end:"\\}",endCaptures:{0:{name:"punctuation.curlybrace.close.apex"}},patterns:[{include:"#statement"},{include:"#class-or-trigger-members"}]},{include:"#javadoc-comment"},{include:"#comment"}]},"trigger-type-statement":{match:"\\b(?:(before)|(after))\\b",captures:{1:{name:"keyword.control.trigger.before.apex"},2:{name:"keyword.control.trigger.after.apex"}}},"trigger-operator-statement":{name:"keyword.operator.trigger.apex",match:"\\b(insert|update|delete|merge|upsert|undelete)\\b"},"trigger-context-declaration":{begin:"\\b(?:(Trigger))\\b(\\.)\\b",beginCaptures:{1:{name:"support.class.trigger.apex"},2:{name:"punctuation.accessor.apex"}},end:"(?=\\})|(?=;)|(?=\\)|(?=\\]))",patterns:[{name:"support.type.trigger.apex",match:"\\b(isExecuting|isInsert|isUpdate|isDelete|isBefore|isAfter|isUndelete|new|newMap|old|oldMap|size)\\b"},{match:"(?:(\\??\\.))([[:alpha:]]+)(?=\\()",captures:{1:{patterns:[{include:"#punctuation-accessor"},{include:"#operator-safe-navigation"}]},2:{name:"support.function.trigger.apex"}}},{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.apex"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.apex"}},patterns:[{include:"#trigger-type-statement"},{include:"#javadoc-comment"},{include:"#comment"},{include:"#expression"}]},{include:"#expression"}]},"enum-declaration":{begin:"(?=\\benum\\b)",end:"(?<=\\})",patterns:[{begin:"(?=enum)",end:"(?=\\{)",patterns:[{include:"#javadoc-comment"},{include:"#comment"},{match:"(enum)\\s+(@?[_[:alpha:]][_[:alnum:]]*)",captures:{1:{name:"keyword.other.enum.apex"},2:{name:"entity.name.type.enum.apex"}}}]},{begin:"\\{",beginCaptures:{0:{name:"punctuation.curlybrace.open.apex"}},end:"\\}",endCaptures:{0:{name:"punctuation.curlybrace.close.apex"}},patterns:[{include:"#javadoc-comment"},{include:"#comment"},{include:"#punctuation-comma"},{begin:"@?[_[:alpha:]][_[:alnum:]]*",beginCaptures:{0:{name:"entity.name.variable.enum-member.apex"}},end:"(?=(,|\\}))",patterns:[{include:"#javadoc-comment"},{include:"#comment"},{include:"#variable-initializer"}]}]},{include:"#javadoc-comment"},{include:"#comment"}]},"interface-declaration":{begin:"(?=\\binterface\\b)",end:"(?<=\\})",patterns:[{begin:`(?x)
(interface)\\b\\s+
(@?[_[:alpha:]][_[:alnum:]]*)`,beginCaptures:{1:{name:"keyword.other.interface.apex"},2:{name:"entity.name.type.interface.apex"}},end:"(?=\\{)",patterns:[{include:"#javadoc-comment"},{include:"#comment"},{include:"#type-parameter-list"},{include:"#extends-class"}]},{begin:"\\{",beginCaptures:{0:{name:"punctuation.curlybrace.open.apex"}},end:"\\}",endCaptures:{0:{name:"punctuation.curlybrace.close.apex"}},patterns:[{include:"#interface-members"}]},{include:"#javadoc-comment"},{include:"#comment"}]},"extends-class":{begin:"(extends)\\b\\s+([_[:alpha:]][_[:alnum:]]*)",beginCaptures:{1:{name:"keyword.other.extends.apex"},2:{name:"entity.name.type.extends.apex"}},end:"(?={|implements)"},"implements-class":{begin:"(implements)\\b\\s+([_[:alpha:]][_[:alnum:]]*)",beginCaptures:{1:{name:"keyword.other.implements.apex"},2:{name:"entity.name.type.implements.apex"}},end:"(?={|extends)"},"soql-query-expression":{begin:"\\b(SELECT)\\b\\s*",beginCaptures:{1:{name:"keyword.operator.query.select.apex"}},end:"(?=;)|(?=\\])|(?=\\))",patterns:[{include:"#soql-query-body"},{include:"#comment"},{include:"#punctuation-comma"},{include:"#operator-assignment"},{include:"#parenthesized-expression"},{include:"#expression-operators"},{include:"#literal"},{match:"([_.[:alpha:]][_.[:alnum:]]*)\\s*(\\,)?",captures:{1:{name:"keyword.query.field.apex"},2:{name:"punctuation.separator.comma.apex"}}}]},"soql-query-body":{patterns:[{include:"#trigger-context-declaration"},{include:"#soql-colon-vars"},{include:"#soql-functions"},{include:"#from-clause"},{include:"#where-clause"},{include:"#query-operators"},{include:"#date-literals"},{include:"#date-literal-with-params"},{include:"#using-scope"},{include:"#soql-group-clauses"},{include:"#orderby-clause"},{include:"#ordering-direction"},{include:"#ordering-nulls"}]},"soql-colon-vars":{begin:"(\\:)\\s*",beginCaptures:{0:{name:"keyword.operator.conditional.colon.apex"}},end:"(?![_[:alnum:]]|\\(|(\\?)?\\[|<)",patterns:[{include:"#trigger-context-declaration"},{match:"([_[:alpha:]][_[:alnum:]]*)(\\??\\.)",captures:{1:{name:"variable.other.object.apex"},2:{patterns:[{include:"#punctuation-accessor"},{include:"#operator-safe-navigation"}]}}},{include:"#soql-colon-method-statement"},{name:"entity.name.variable.local.apex",match:"[_[:alpha:]][_[:alnum:]]*"}]},"soql-colon-method-statement":{begin:"(:?\\.)?([_[:alpha:]][_[:alnum:]]*)(?=\\()",beginCaptures:{1:{name:"punctuation.accessor.apex"},2:{name:"entity.name.function.apex"}},end:"(?<=\\))",patterns:[{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.apex"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.apex"}},patterns:[{include:"#expression"}]},{include:"#statement"}]},"soql-group-clauses":{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.apex"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.apex"}},patterns:[{include:"#soql-query-expression"},{include:"#soql-colon-vars"},{include:"#soql-group-clauses"},{include:"#punctuation-comma"},{include:"#operator-assignment"},{include:"#literal"},{include:"#query-operators"},{include:"#date-literals"},{include:"#date-literal-with-params"},{include:"#using-scope"},{name:"keyword.query.field.apex",match:"[_.[:alpha:]][_.[:alnum:]]*"}]},"soql-functions":{begin:"\\b(AVG|CALENDAR_MONTH|CALENDAR_QUARTER|CALENDAR_YEAR|convertCurrency|convertTimezone|COUNT|COUNT_DISTINCT|DAY_IN_MONTH|DAY_IN_WEEK|DAY_IN_YEAR|DAY_ONLY|toLabel|INCLUDES|EXCLUDES|FISCAL_MONTH|FISCAL_QUARTER|FISCAL_YEAR|FORMAT|GROUPING|GROUP BY CUBE|GROUP BY ROLLUP|HOUR_IN_DAY|MAX|MIN|SUM|WEEK_IN_MONTH|WEEK_IN_YEAR)\\s*(\\()",beginCaptures:{1:{name:"support.function.query.apex"},2:{name:"punctuation.parenthesis.open.apex"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.apex"}},patterns:[{include:"#literal"},{include:"#punctuation-comma"},{include:"#soql-functions"},{name:"keyword.query.field.apex",match:"[_.[:alpha:]][_.[:alnum:]]*"}]},"from-clause":{match:"(FROM)\\b\\s*([_\\.[:alnum:]]+\\b)?",captures:{1:{name:"keyword.operator.query.from.apex"},2:{name:"storage.type.apex"}}},"where-clause":{match:"\\b(WHERE)\\b\\s*",captures:{1:{name:"keyword.operator.query.where.apex"}}},"orderby-clause":{match:"\\b(ORDER BY)\\b\\s*",captures:{1:{name:"keyword.operator.query.orderby.apex"}},patterns:[{include:"#ordering-direction"},{include:"#ordering-nulls"}]},"ordering-direction":{match:"\\b(?:(ASC)|(DESC))\\b",captures:{1:{name:"keyword.operator.query.ascending.apex"},2:{name:"keyword.operator.query.descending.apex"}}},"ordering-nulls":{match:"\\b(?:(NULLS FIRST)|(NULLS LAST))\\b",captures:{1:{name:"keyword.operator.query.nullsfirst.apex"},2:{name:"keyword.operator.query.nullslast.apex"}}},"query-operators":{match:"\\b(ABOVE|AND|AT|FOR REFERENCE|FOR UPDATE|FOR VIEW|GROUP BY|HAVING|IN|LIKE|LIMIT|NOT IN|NOT|OFFSET|OR|TYPEOF|UPDATE TRACKING|UPDATE VIEWSTAT|WITH DATA CATEGORY|WITH)\\b\\s*",captures:{1:{name:"keyword.operator.query.apex"}}},"date-literals":{match:"\\b(YESTERDAY|TODAY|TOMORROW|LAST_WEEK|THIS_WEEK|NEXT_WEEK|LAST_MONTH|THIS_MONTH|NEXT_MONTH|LAST_90_DAYS|NEXT_90_DAYS|THIS_QUARTER|LAST_QUARTER|NEXT_QUARTER|THIS_YEAR|LAST_YEAR|NEXT_YEAR|THIS_FISCAL_QUARTER|LAST_FISCAL_QUARTER|NEXT_FISCAL_QUARTER|THIS_FISCAL_YEAR|LAST_FISCAL_YEAR|NEXT_FISCAL_YEAR)\\b\\s*",captures:{1:{name:"keyword.operator.query.date.apex"}}},"date-literal-with-params":{match:"\\b((LAST_N_DAYS|NEXT_N_DAYS|NEXT_N_WEEKS|LAST_N_WEEKS|NEXT_N_MONTHS|LAST_N_MONTHS|NEXT_N_QUARTERS|LAST_N_QUARTERS|NEXT_N_YEARS|LAST_N_YEARS|NEXT_N_FISCAL_QUARTERS|LAST_N_FISCAL_QUARTERS|NEXT_N_FISCAL_YEARS|LAST_N_FISCAL_YEARS)\\s*\\:\\d+)\\b",captures:{1:{name:"keyword.operator.query.date.apex"}}},"using-scope":{match:"((USING SCOPE)\\b\\s*(Delegated|Everything|Mine|My_Territory|My_Team_Territory|Team))\\b\\s*",captures:{1:{name:"keyword.operator.query.using.apex"}}},"type-parameter-list":{begin:"\\<",beginCaptures:{0:{name:"punctuation.definition.typeparameters.begin.apex"}},end:"\\>",endCaptures:{0:{name:"punctuation.definition.typeparameters.end.apex"}},patterns:[{match:"(@?[_[:alpha:]][_[:alnum:]]*)\\b",captures:{1:{name:"entity.name.type.type-parameter.apex"}}},{include:"#comment"},{include:"#punctuation-comma"}]},"field-declaration":{begin:`(?x)
(?<type_name>
  (?:
    (?:
      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
      (?<name_and_type_args> # identifier + type arguments (if any)
        \\g<identifier>\\s*
        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
      )
      (?:\\s*\\.\\s*\\g<name_and_type_args>)*
    )
    (?:\\s*\\?\\s*)? # nullable suffix?
    (?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)* # array suffix?
  )
)\\s+
(\\g<identifier>)\\s* # first field name
(?!=>|==)(?=,|;|=|$)`,beginCaptures:{1:{patterns:[{include:"#support-type"},{include:"#type"}]},5:{name:"entity.name.variable.field.apex"}},end:"(?=;)",patterns:[{name:"entity.name.variable.field.apex",match:"@?[_[:alpha:]][_[:alnum:]]*"},{include:"#punctuation-comma"},{include:"#comment"},{include:"#variable-initializer"},{include:"#class-or-trigger-members"}]},"property-declaration":{begin:`(?x)
(?!.*\\b(?:class|interface|enum)\\b)\\s*
(?<return_type>
  (?<type_name>
    (?:
      (?:ref\\s+)?   # ref return
      (?:
        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
        (?<name_and_type_args> # identifier + type arguments (if any)
          \\g<identifier>\\s*
          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
        )
        (?:\\s*\\.\\s*\\g<name_and_type_args>)*
      )
      (?:\\s*\\?\\s*)? # nullable suffix?
      (?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)* # array suffix?
    )
  )\\s+
)
(?<interface_name>\\g<type_name>\\s*\\.\\s*)?
(?<property_name>\\g<identifier>)\\s*
(?=\\{|=>|$)`,beginCaptures:{1:{patterns:[{include:"#type"}]},6:{patterns:[{include:"#type"},{include:"#punctuation-accessor"}]},7:{name:"entity.name.variable.property.apex"}},end:"(?<=\\})|(?=;)",patterns:[{include:"#comment"},{include:"#property-accessors"},{include:"#expression-body"},{include:"#variable-initializer"},{include:"#class-or-trigger-members"}]},"indexer-declaration":{begin:`(?x)
(?<return_type>
  (?<type_name>
    (?:
      (?:ref\\s+)?   # ref return
      (?:
        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
        (?<name_and_type_args> # identifier + type arguments (if any)
          \\g<identifier>\\s*
          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
        )
        (?:\\s*\\.\\s*\\g<name_and_type_args>)*
      )
      (?:\\s*\\?\\s*)? # nullable suffix?
      (?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)* # array suffix?
    )
  )\\s+
)
(?<interface_name>\\g<type_name>\\s*\\.\\s*)?
(?<indexer_name>this)\\s*
(?=\\[)`,beginCaptures:{1:{patterns:[{include:"#type"}]},6:{patterns:[{include:"#type"},{include:"#punctuation-accessor"}]},7:{name:"keyword.other.this.apex"}},end:"(?<=\\})|(?=;)",patterns:[{include:"#comment"},{include:"#property-accessors"},{include:"#expression-body"},{include:"#variable-initializer"}]},"property-accessors":{begin:"\\{",beginCaptures:{0:{name:"punctuation.curlybrace.open.apex"}},end:"\\}",endCaptures:{0:{name:"punctuation.curlybrace.close.apex"}},patterns:[{name:"storage.modifier.apex",match:"\\b(private|protected)\\b"},{name:"keyword.other.get.apex",match:"\\b(get)\\b"},{name:"keyword.other.set.apex",match:"\\b(set)\\b"},{include:"#comment"},{include:"#expression-body"},{include:"#block"},{include:"#punctuation-semicolon"}]},"method-declaration":{begin:`(?x)
(?<return_type>
  (?<type_name>
    (?:
      (?:ref\\s+)?   # ref return
      (?:
        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
        (?<name_and_type_args> # identifier + type arguments (if any)
          \\g<identifier>\\s*
          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
        )
        (?:\\s*\\.\\s*\\g<name_and_type_args>)*
      )
      (?:\\s*\\?\\s*)? # nullable suffix?
      (?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)* # array suffix?
    )
  )\\s+
)
(?<interface_name>\\g<type_name>\\s*\\.\\s*)?
(\\g<identifier>)\\s*
(<([^<>]+)>)?\\s*
(?=\\()`,beginCaptures:{1:{patterns:[{include:"#support-type"},{include:"#type"}]},6:{patterns:[{include:"#type"},{include:"#punctuation-accessor"}]},7:{patterns:[{include:"#support-type"},{include:"#method-name-custom"}]},8:{patterns:[{include:"#type-parameter-list"}]}},end:"(?<=\\})|(?=;)",patterns:[{include:"#comment"},{include:"#parenthesized-parameter-list"},{include:"#expression-body"},{include:"#block"}]},"method-name-custom":{name:"entity.name.function.apex",match:"@?[_[:alpha:]][_[:alnum:]]*"},"constructor-declaration":{begin:"(?=@?[_[:alpha:]][_[:alnum:]]*\\s*\\()",end:"(?<=\\})|(?=;)",patterns:[{match:"(@?[_[:alpha:]][_[:alnum:]]*)\\b",captures:{1:{name:"entity.name.function.apex"}}},{begin:"(:)",beginCaptures:{1:{name:"punctuation.separator.colon.apex"}},end:"(?=\\{|=>)",patterns:[{include:"#constructor-initializer"}]},{include:"#parenthesized-parameter-list"},{include:"#comment"},{include:"#expression-body"},{include:"#block"}]},"constructor-initializer":{begin:"\\b(?:(this))\\b\\s*(?=\\()",beginCaptures:{1:{name:"keyword.other.this.apex"}},end:"(?<=\\))",patterns:[{include:"#argument-list"}]},block:{begin:"\\{",beginCaptures:{0:{name:"punctuation.curlybrace.open.apex"}},end:"\\}",endCaptures:{0:{name:"punctuation.curlybrace.close.apex"}},patterns:[{include:"#statement"}]},"variable-initializer":{begin:"(?<!=|!)(=)(?!=|>)",beginCaptures:{1:{name:"keyword.operator.assignment.apex"}},end:"(?=[,\\)\\];}])",patterns:[{include:"#expression"}]},"expression-body":{begin:"=>",beginCaptures:{0:{name:"keyword.operator.arrow.apex"}},end:"(?=[,\\);}])",patterns:[{include:"#expression"}]},"goto-statement":{begin:"(?<!\\.)\\b(goto)\\b",beginCaptures:{1:{name:"keyword.control.goto.apex"}},end:"(?=;)",patterns:[{begin:"\\b(case)\\b",beginCaptures:{1:{name:"keyword.control.case.apex"}},end:"(?=;)",patterns:[{include:"#expression"}]},{match:"\\b(default)\\b",captures:{1:{name:"keyword.control.default.apex"}}},{name:"entity.name.label.apex",match:"@?[_[:alpha:]][_[:alnum:]]*"}]},"return-statement":{begin:"(?<!\\.)\\b(return)\\b",beginCaptures:{1:{name:"keyword.control.flow.return.apex"}},end:"(?=;)",patterns:[{include:"#expression"}]},"break-or-continue-statement":{match:"(?<!\\.)\\b(?:(break)|(continue))\\b",captures:{1:{name:"keyword.control.flow.break.apex"},2:{name:"keyword.control.flow.continue.apex"}}},"throw-statement":{begin:"(?<!\\.)\\b(throw)\\b",beginCaptures:{1:{name:"keyword.control.flow.throw.apex"}},end:"(?=;)",patterns:[{include:"#expression"}]},"if-statement":{begin:"(?<!\\.)\\b(if)\\b\\s*(?=\\()",beginCaptures:{1:{name:"keyword.control.conditional.if.apex"}},end:"(?<=\\})|(?=;)",patterns:[{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.apex"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.apex"}},patterns:[{include:"#expression"}]},{include:"#statement"}]},"else-part":{begin:"(?<!\\.)\\b(else)\\b",beginCaptures:{1:{name:"keyword.control.conditional.else.apex"}},end:"(?<=\\})|(?=;)",patterns:[{include:"#statement"}]},"switch-statement":{begin:`(?x)
(switch)\\b\\s+
(on)\\b\\s+
(?:([_.?\\'\\(\\)[:alnum:]]+)\\s*)?
(\\{)`,beginCaptures:{1:{name:"keyword.control.switch.apex"},2:{name:"keyword.control.switch.on.apex"},3:{patterns:[{include:"#statement"},{include:"#parenthesized-expression"}]},4:{name:"punctuation.curlybrace.open.apex"}},end:"(\\})",endCaptures:{0:{name:"punctuation.curlybrace.close.apex"}},patterns:[{include:"#when-string"},{include:"#when-else-statement"},{include:"#when-sobject-statement"},{include:"#when-statement"},{include:"#when-multiple-statement"},{include:"#expression"},{include:"#punctuation-comma"},{include:"#punctuation-semicolon"}]},"when-statement":{begin:"(when)\\b\\s+([\\'_\\-[:alnum:]]+)\\s*",beginCaptures:{1:{name:"keyword.control.switch.when.apex"},2:{patterns:[{include:"#expression"}]}},end:"(?<=\\})",patterns:[{include:"#block"},{include:"#expression"}]},"when-string":{begin:"(when)(\\b\\s*)((\\')[_.\\,\\'\\s*[:alnum:]]+)",beginCaptures:{1:{name:"keyword.control.switch.when.apex"},2:{name:"punctuation.whitespace.apex"},3:{patterns:[{include:"#when-string-statement"},{include:"#punctuation-comma"}]}},end:"(?<=\\})",patterns:[{include:"#block"},{include:"#expression"}]},"when-string-statement":{patterns:[{name:"string.quoted.single.apex",begin:"\\'",beginCaptures:{0:{name:"punctuation.definition.string.begin.apex"}},end:"\\'",endCaptures:{0:{name:"punctuation.definition.string.end.apex"}}}]},"when-else-statement":{begin:"(when)\\b\\s+(else)\\b\\s*",beginCaptures:{1:{name:"keyword.control.switch.when.apex"},2:{name:"keyword.control.switch.else.apex"}},end:"(?<=\\})",patterns:[{include:"#block"},{include:"#expression"}]},"when-multiple-statement":{begin:"(when)\\b\\s*",beginCaptures:{1:{name:"keyword.control.switch.when.apex"}},end:"(?<=\\})",patterns:[{include:"#block"},{include:"#expression"}]},"when-sobject-statement":{begin:"(when)\\b\\s+([_[:alnum:]]+)\\s+([_[:alnum:]]+)\\s*",beginCaptures:{1:{name:"keyword.control.switch.when.apex"},2:{name:"storage.type.apex"},3:{name:"entity.name.variable.local.apex"}},end:"(?<=\\})",patterns:[{include:"#block"},{include:"#expression"}]},"do-statement":{begin:"(?<!\\.)\\b(do)\\b",beginCaptures:{1:{name:"keyword.control.loop.do.apex"}},end:"(?=;|})",patterns:[{include:"#statement"}]},"while-statement":{begin:"(?<!\\.)\\b(while)\\b\\s*(?=\\()",beginCaptures:{1:{name:"keyword.control.loop.while.apex"}},end:"(?<=\\})|(?=;)",patterns:[{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.apex"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.apex"}},patterns:[{include:"#expression"}]},{include:"#statement"}]},"for-statement":{begin:"(?<!\\.)\\b(for)\\b\\s*(?=\\()",beginCaptures:{1:{name:"keyword.control.loop.for.apex"}},end:"(?<=\\})|(?=;)",patterns:[{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.apex"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.apex"}},patterns:[{include:"#for-apex-syntax"},{include:"#local-variable-declaration"},{include:"#expression"},{include:"#punctuation-comma"},{include:"#punctuation-semicolon"},{include:"#colon-expression"}]},{include:"#statement"}]},"for-apex-syntax":{match:"([_.[:alpha:]][_.[:alnum:]]+)\\s+([_.[:alpha:]][_.[:alnum:]]*)\\s*(\\:)",captures:{1:{patterns:[{include:"#support-type"},{include:"#type"}]},2:{name:"entity.name.variable.local.apex"},3:{name:"keyword.operator.iterator.colon.apex"}}},"try-statement":{patterns:[{include:"#try-block"},{include:"#catch-clause"},{include:"#finally-clause"}]},"try-block":{begin:"(?<!\\.)\\b(try)\\b",beginCaptures:{1:{name:"keyword.control.try.apex"}},end:"(?<=\\})",patterns:[{include:"#comment"},{include:"#block"}]},"finally-clause":{begin:"(?<!\\.)\\b(finally)\\b",beginCaptures:{1:{name:"keyword.control.try.finally.apex"}},end:"(?<=\\})",patterns:[{include:"#comment"},{include:"#block"}]},"catch-clause":{begin:"(?<!\\.)\\b(catch)\\b",beginCaptures:{1:{name:"keyword.control.try.catch.apex"}},end:"(?<=\\})",patterns:[{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.apex"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.apex"}},patterns:[{match:`(?x)
(?<type_name>
  (?:
    (?:
      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
      (?<name_and_type_args> # identifier + type arguments (if any)
        \\g<identifier>\\s*
        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
      )
      (?:\\s*\\.\\s*\\g<name_and_type_args>)*
    )
    (?:\\s*\\?\\s*)? # nullable suffix?
    (?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)* # array suffix?
  )
)\\s*
(?:(\\g<identifier>)\\b)?`,captures:{1:{patterns:[{include:"#support-type"},{include:"#type"}]},5:{name:"entity.name.variable.local.apex"}}}]},{include:"#comment"},{include:"#block"}]},"local-declaration":{patterns:[{include:"#local-constant-declaration"},{include:"#local-variable-declaration"}]},"local-variable-declaration":{begin:`(?x)
(?:
  (?:(\\bref)\\s+)?(\\bvar\\b)| # ref local
  (?<type_name>
    (?:
      (?:ref\\s+)?   # ref local
      (?:
        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
        (?<name_and_type_args> # identifier + type arguments (if any)
          \\g<identifier>\\s*
          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
        )
        (?:\\s*\\.\\s*\\g<name_and_type_args>)*
      )
      (?:\\s*\\?\\s*)? # nullable suffix?
      (?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)* # array suffix?
    )
  )
)\\s+
(\\g<identifier>)\\s*
(?=,|;|=|\\))`,beginCaptures:{1:{name:"storage.modifier.apex"},2:{name:"keyword.other.var.apex"},3:{patterns:[{include:"#support-type"},{include:"#type"}]},7:{name:"entity.name.variable.local.apex"}},end:"(?=;|\\))",patterns:[{name:"entity.name.variable.local.apex",match:"@?[_[:alpha:]][_[:alnum:]]*"},{include:"#punctuation-comma"},{include:"#comment"},{include:"#variable-initializer"}]},"local-constant-declaration":{begin:`(?x)
(?<const_keyword>\\b(?:const)\\b)\\s*
(?<type_name>
  (?:
    (?:
      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
      (?<name_and_type_args> # identifier + type arguments (if any)
        \\g<identifier>\\s*
        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
      )
      (?:\\s*\\.\\s*\\g<name_and_type_args>)*
    )
    (?:\\s*\\?\\s*)? # nullable suffix?
    (?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)* # array suffix?
  )
)\\s+
(\\g<identifier>)\\s*
(?=,|;|=)`,beginCaptures:{1:{name:"storage.modifier.apex"},2:{patterns:[{include:"#type"}]},6:{name:"entity.name.variable.local.apex"}},end:"(?=;)",patterns:[{name:"entity.name.variable.local.apex",match:"@?[_[:alpha:]][_[:alnum:]]*"},{include:"#punctuation-comma"},{include:"#comment"},{include:"#variable-initializer"}]},"throw-expression":{match:"(?<!\\.)\\b(throw)\\b",captures:{1:{name:"keyword.control.flow.throw.apex"}}},literal:{patterns:[{include:"#boolean-literal"},{include:"#null-literal"},{include:"#numeric-literal"},{include:"#string-literal"}]},"boolean-literal":{patterns:[{name:"constant.language.boolean.true.apex",match:"(?<!\\.)\\btrue\\b"},{name:"constant.language.boolean.false.apex",match:"(?<!\\.)\\bfalse\\b"}]},"null-literal":{name:"constant.language.null.apex",match:"(?<!\\.)\\bnull\\b"},"numeric-literal":{patterns:[{name:"constant.numeric.datetime.apex",match:"\\b(\\d{4}\\-\\d{2}\\-\\d{2}T\\d{2}\\:\\d{2}\\:\\d{2}(\\.\\d{1,3})?(\\-|\\+)\\d{2}\\:\\d{2})\\b"},{name:"constant.numeric.datetime.apex",match:"\\b(\\d{4}\\-\\d{2}\\-\\d{2}T\\d{2}\\:\\d{2}\\:\\d{2}(\\.\\d{1,3})?(Z)?)\\b"},{name:"constant.numeric.date.apex",match:"\\b(\\d{4}\\-\\d{2}\\-\\d{2})\\b"},{name:"constant.numeric.hex.apex",match:"\\b0(x|X)[0-9a-fA-F_]+(U|u|L|l|UL|Ul|uL|ul|LU|Lu|lU|lu)?\\b"},{name:"constant.numeric.binary.apex",match:"\\b0(b|B)[01_]+(U|u|L|l|UL|Ul|uL|ul|LU|Lu|lU|lu)?\\b"},{name:"constant.numeric.decimal.apex",match:"\\b([0-9_]+)?\\.[0-9_]+((e|E)[0-9]+)?(F|f|D|d|M|m)?\\b"},{name:"constant.numeric.decimal.apex",match:"\\b[0-9_]+(e|E)[0-9_]+(F|f|D|d|M|m)?\\b"},{name:"constant.numeric.decimal.apex",match:"\\b[0-9_]+(F|f|D|d|M|m)\\b"},{name:"constant.numeric.decimal.apex",match:"\\b[0-9_]+(U|u|L|l|UL|Ul|uL|ul|LU|Lu|lU|lu)?\\b"}]},"string-literal":{name:"string.quoted.single.apex",begin:"'",beginCaptures:{0:{name:"punctuation.definition.string.begin.apex"}},end:"(\\')|((?:[^\\\\\\n])$)",endCaptures:{1:{name:"punctuation.definition.string.end.apex"},2:{name:"invalid.illegal.newline.apex"}},patterns:[{include:"#string-character-escape"}]},"string-character-escape":{name:"constant.character.escape.apex",match:"\\\\."},"expression-operators":{patterns:[{name:"keyword.operator.assignment.compound.apex",match:"\\*=|/=|%=|\\+=|-="},{name:"keyword.operator.assignment.compound.bitwise.apex",match:"\\&=|\\^=|<<=|>>=|\\|="},{name:"keyword.operator.bitwise.shift.apex",match:"<<|>>"},{name:"keyword.operator.comparison.apex",match:"==|!="},{name:"keyword.operator.relational.apex",match:"<=|>=|<|>"},{name:"keyword.operator.logical.apex",match:"\\!|&&|\\|\\|"},{name:"keyword.operator.bitwise.apex",match:"\\&|~|\\^|\\|"},{name:"keyword.operator.assignment.apex",match:"\\="},{name:"keyword.operator.decrement.apex",match:"--"},{name:"keyword.operator.increment.apex",match:"\\+\\+"},{name:"keyword.operator.arithmetic.apex",match:"%|\\*|/|-|\\+"}]},"conditional-operator":{begin:"(?<!\\?)\\?(?!\\?|\\.|\\[)",beginCaptures:{0:{name:"keyword.operator.conditional.question-mark.apex"}},end:":",endCaptures:{0:{name:"keyword.operator.conditional.colon.apex"}},patterns:[{include:"#expression"}]},"colon-expression":{name:"keyword.operator.conditional.colon.apex",match:":"},"parenthesized-expression":{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.apex"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.apex"}},patterns:[{include:"#expression"}]},"initializer-expression":{begin:"\\{",beginCaptures:{0:{name:"punctuation.curlybrace.open.apex"}},end:"\\}",endCaptures:{0:{name:"punctuation.curlybrace.close.apex"}},patterns:[{include:"#expression"},{include:"#punctuation-comma"}]},identifier:{name:"variable.other.readwrite.apex",match:"@?[_[:alpha:]][_[:alnum:]]*"},"cast-expression":{match:`(?x)
(\\()\\s*
(?<type_name>
  (?:
    (?:
      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
      (?<name_and_type_args> # identifier + type arguments (if any)
        \\g<identifier>\\s*
        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
      )
      (?:\\s*\\.\\s*\\g<name_and_type_args>)*
    )
    (?:\\s*\\?\\s*)? # nullable suffix?
    (?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)* # array suffix?
  )
)\\s*
(\\))(?=\\s*@?[_[:alnum:]\\(])`,captures:{1:{name:"punctuation.parenthesis.open.apex"},2:{patterns:[{include:"#support-type"},{include:"#type"}]},6:{name:"punctuation.parenthesis.close.apex"}}},"this-expression":{match:"\\b(?:(this))\\b",captures:{1:{name:"keyword.other.this.apex"}}},"invocation-expression":{begin:`(?x)
(?:(\\??\\.)\\s*)?                                  # safe navigator or accessor
(@?[_[:alpha:]][_[:alnum:]]*)\\s*                 # method name
(?<type_args>\\s*<([^<>]|\\g<type_args>)+>\\s*)?\\s* # type arguments
(?=\\()                                           # open paren of argument list`,beginCaptures:{1:{patterns:[{include:"#punctuation-accessor"},{include:"#operator-safe-navigation"}]},2:{name:"entity.name.function.apex"},3:{patterns:[{include:"#type-arguments"}]}},end:"(?<=\\))",patterns:[{include:"#argument-list"}]},"element-access-expression":{begin:`(?x)
(?:(\\??\\.)\\s*)?                       # safe navigator or accessor
(?:(@?[_[:alpha:]][_[:alnum:]]*)\\s*)? # property name
(?:(\\?)\\s*)?                          # null-conditional operator?
(?=\\[)                                # open bracket of argument list`,beginCaptures:{1:{patterns:[{include:"#punctuation-accessor"},{include:"#operator-safe-navigation"}]},2:{name:"variable.other.object.property.apex"},3:{name:"keyword.operator.null-conditional.apex"}},end:"(?<=\\])(?!\\s*\\[)",patterns:[{include:"#bracketed-argument-list"}]},"member-access-expression":{patterns:[{match:`(?x)
(\\??\\.)\\s*                       # safe navigator or accessor
(@?[_[:alpha:]][_[:alnum:]]*)\\s* # property name
(?![_[:alnum:]]|\\(|(\\?)?\\[|<)    # next character is not alpha-numeric, nor a (, [, or <. Also, test for ?[`,captures:{1:{patterns:[{include:"#punctuation-accessor"},{include:"#operator-safe-navigation"}]},2:{name:"variable.other.object.property.apex"}}},{match:`(?x)
(\\??\\.)?\\s*
(@?[_[:alpha:]][_[:alnum:]]*)
(?<type_params>\\s*<([^<>]|\\g<type_params>)+>\\s*)
(?=
  (\\s*\\?)?
  \\s*\\.\\s*@?[_[:alpha:]][_[:alnum:]]*
)`,captures:{1:{patterns:[{include:"#punctuation-accessor"},{include:"#operator-safe-navigation"}]},2:{name:"variable.other.object.apex"},3:{patterns:[{include:"#type-arguments"}]}}},{match:`(?x)
(@?[_[:alpha:]][_[:alnum:]]*)
(?=
  (\\s*\\?)?
  \\s*\\.\\s*@?[_[:alpha:]][_[:alnum:]]*
)`,captures:{1:{name:"variable.other.object.apex"}}}]},"object-creation-expression":{patterns:[{include:"#object-creation-expression-with-parameters"},{include:"#object-creation-expression-with-no-parameters"},{include:"#punctuation-comma"}]},"object-creation-expression-with-parameters":{begin:`(?x)
(delete|insert|undelete|update|upsert)?
\\s*(new)\\s+
(?<type_name>
  (?:
    (?:
      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
      (?<name_and_type_args> # identifier + type arguments (if any)
        \\g<identifier>\\s*
        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
      )
      (?:\\s*\\.\\s*\\g<name_and_type_args>)*
    )
    (?:\\s*\\?\\s*)? # nullable suffix?
    (?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)* # array suffix?
  )
)\\s*
(?=\\()`,beginCaptures:{1:{name:"support.function.apex"},2:{name:"keyword.control.new.apex"},3:{patterns:[{include:"#support-type"},{include:"#type"}]}},end:"(?<=\\))",patterns:[{include:"#argument-list"}]},"object-creation-expression-with-no-parameters":{match:`(?x)
(delete|insert|undelete|update|upsert)?
\\s*(new)\\s+
(?<type_name>
  (?:
    (?:
      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
      (?<name_and_type_args> # identifier + type arguments (if any)
        \\g<identifier>\\s*
        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
      )
      (?:\\s*\\.\\s*\\g<name_and_type_args>)*
    )
    (?:\\s*\\?\\s*)? # nullable suffix?
    (?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)* # array suffix?
  )
)\\s*
(?=\\{|$)`,captures:{1:{name:"support.function.apex"},2:{name:"keyword.control.new.apex"},3:{patterns:[{include:"#support-type"},{include:"#type"}]}}},"array-creation-expression":{begin:`(?x)
\\b(new)\\b\\s*
(?<type_name>
  (?:
    (?:
      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
      (?<name_and_type_args> # identifier + type arguments (if any)
        \\g<identifier>\\s*
        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
      )
      (?:\\s*\\.\\s*\\g<name_and_type_args>)*
    )
    (?:\\s*\\?\\s*)? # nullable suffix?
    (?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)* # array suffix?
  )
)?\\s*
(?=\\[)`,beginCaptures:{1:{name:"keyword.control.new.apex"},2:{patterns:[{include:"#support-type"},{include:"#type"}]}},end:"(?<=\\])",patterns:[{include:"#bracketed-argument-list"}]},"parenthesized-parameter-list":{begin:"(\\()",beginCaptures:{0:{name:"punctuation.parenthesis.open.apex"}},end:"(\\))",endCaptures:{0:{name:"punctuation.parenthesis.close.apex"}},patterns:[{include:"#comment"},{include:"#parameter"},{include:"#punctuation-comma"},{include:"#variable-initializer"}]},parameter:{match:`(?x)
(?:(?:\\b(this)\\b)\\s+)?
(?<type_name>
  (?:
    (?:ref\\s+)?   # ref return
    (?:
      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
      (?<name_and_type_args> # identifier + type arguments (if any)
        \\g<identifier>\\s*
        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
      )
      (?:\\s*\\.\\s*\\g<name_and_type_args>)*
    )
    (?:\\s*\\?\\s*)? # nullable suffix?
    (?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)* # array suffix?
  )
)\\s+
(\\g<identifier>)`,captures:{1:{name:"storage.modifier.apex"},2:{patterns:[{include:"#support-type"},{include:"#type"}]},6:{name:"entity.name.variable.parameter.apex"}}},"argument-list":{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.apex"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.apex"}},patterns:[{include:"#named-argument"},{include:"#expression"},{include:"#punctuation-comma"}]},"bracketed-argument-list":{begin:"\\[",beginCaptures:{0:{name:"punctuation.squarebracket.open.apex"}},end:"\\]",endCaptures:{0:{name:"punctuation.squarebracket.close.apex"}},patterns:[{include:"#soql-query-expression"},{include:"#named-argument"},{include:"#expression"},{include:"#punctuation-comma"}]},"named-argument":{begin:"(@?[_[:alpha:]][_[:alnum:]]*)\\s*(:)",beginCaptures:{1:{name:"entity.name.variable.parameter.apex"},2:{name:"punctuation.separator.colon.apex"}},end:"(?=(,|\\)|\\]))",patterns:[{include:"#expression"}]},type:{name:"meta.type.apex",patterns:[{include:"#comment"},{include:"#type-builtin"},{include:"#type-name"},{include:"#type-arguments"},{include:"#type-array-suffix"},{include:"#type-nullable-suffix"}]},"type-builtin":{match:"\\b(Blob|Boolean|byte|Date|Datetime|Decimal|Double|ID|Integer|Long|Object|String|Time|void)\\b",captures:{1:{name:"keyword.type.apex"}}},"type-name":{patterns:[{match:"(@?[_[:alpha:]][_[:alnum:]]*)\\s*(\\.)",captures:{1:{name:"storage.type.apex"},2:{name:"punctuation.accessor.apex"}}},{match:"(\\.)\\s*(@?[_[:alpha:]][_[:alnum:]]*)",captures:{1:{name:"punctuation.accessor.apex"},2:{name:"storage.type.apex"}}},{name:"storage.type.apex",match:"@?[_[:alpha:]][_[:alnum:]]*"}]},"type-arguments":{begin:"<",beginCaptures:{0:{name:"punctuation.definition.typeparameters.begin.apex"}},end:">",endCaptures:{0:{name:"punctuation.definition.typeparameters.end.apex"}},patterns:[{include:"#comment"},{include:"#support-type"},{include:"#type"},{include:"#punctuation-comma"}]},"type-array-suffix":{begin:"\\[",beginCaptures:{0:{name:"punctuation.squarebracket.open.apex"}},end:"\\]",endCaptures:{0:{name:"punctuation.squarebracket.close.apex"}},patterns:[{include:"#punctuation-comma"}]},"type-nullable-suffix":{match:"\\?",captures:{0:{name:"punctuation.separator.question-mark.apex"}}},"operator-assignment":{name:"keyword.operator.assignment.apex",match:"(?<!=|!)(=)(?!=)"},"operator-safe-navigation":{name:"keyword.operator.safe-navigation.apex",match:"\\?\\."},"punctuation-comma":{name:"punctuation.separator.comma.apex",match:","},"punctuation-semicolon":{name:"punctuation.terminator.statement.apex",match:";"},"punctuation-accessor":{name:"punctuation.accessor.apex",match:"\\."},comment:{patterns:[{name:"comment.block.apex",begin:"/\\*(\\*)?",beginCaptures:{0:{name:"punctuation.definition.comment.apex"}},end:"\\*/",endCaptures:{0:{name:"punctuation.definition.comment.apex"}}},{begin:"(^\\s+)?(?=//)",beginCaptures:{1:{name:"punctuation.whitespace.comment.leading.apex"}},end:"(?=$)",patterns:[{name:"comment.block.documentation.apex",begin:"(?<!/)///(?!/)",beginCaptures:{0:{name:"punctuation.definition.comment.apex"}},end:"(?=$)",patterns:[{include:"#xml-doc-comment"}]},{name:"comment.line.double-slash.apex",begin:"(?<!/)//(?:(?!/)|(?=//))",beginCaptures:{0:{name:"punctuation.definition.comment.apex"}},end:"(?=$)"}]}]},"javadoc-comment":{patterns:[{name:"comment.block.javadoc.apex",begin:"^\\s*(/\\*\\*)(?!/)",beginCaptures:{1:{name:"punctuation.definition.comment.apex"}},end:"\\*/",endCaptures:{0:{name:"punctuation.definition.comment.apex"}},patterns:[{match:"@(deprecated|author|return|see|serial|since|version|usage|name|link)\\b",name:"keyword.other.documentation.javadoc.apex"},{match:"(@param)\\s+(\\S+)",captures:{1:{name:"keyword.other.documentation.javadoc.apex"},2:{name:"entity.name.variable.parameter.apex"}}},{match:"(@(?:exception|throws))\\s+(\\S+)",captures:{1:{name:"keyword.other.documentation.javadoc.apex"},2:{name:"entity.name.type.class.apex"}}},{match:"(`([^`]+?)`)",captures:{1:{name:"string.quoted.single.apex"}}}]}]},"xml-doc-comment":{patterns:[{include:"#xml-comment"},{include:"#xml-character-entity"},{include:"#xml-cdata"},{include:"#xml-tag"}]},"xml-tag":{name:"meta.tag.apex",begin:`(?x)
(</?)
(
  (?:
    ([-_[:alnum:]]+)
    (:)
  )?
  ([-_[:alnum:]]+)
)`,beginCaptures:{1:{name:"punctuation.definition.tag.apex"},2:{name:"entity.name.tag.apex"},3:{name:"entity.name.tag.namespace.apex"},4:{name:"punctuation.separator.colon.apex"},5:{name:"entity.name.tag.localname.apex"}},end:"(/?>)",endCaptures:{1:{name:"punctuation.definition.tag.apex"}},patterns:[{include:"#xml-attribute"}]},"xml-attribute":{patterns:[{match:`(?x)
(?:^|\\s+)
(
  (?:
    ([-_[:alnum:]]+)
    (:)
  )?
  ([-_[:alnum:]]+)
)
(=)`,captures:{1:{name:"entity.other.attribute-name.apex"},2:{name:"entity.other.attribute-name.namespace.apex"},3:{name:"punctuation.separator.colon.apex"},4:{name:"entity.other.attribute-name.localname.apex"},5:{name:"punctuation.separator.equals.apex"}}},{include:"#xml-string"}]},"xml-cdata":{name:"string.unquoted.cdata.apex",begin:"<!\\[CDATA\\[",beginCaptures:{0:{name:"punctuation.definition.string.begin.apex"}},end:"\\]\\]>",endCaptures:{0:{name:"punctuation.definition.string.end.apex"}}},"xml-string":{patterns:[{name:"string.quoted.single.apex",begin:"\\'",beginCaptures:{0:{name:"punctuation.definition.string.begin.apex"}},end:"\\'",endCaptures:{0:{name:"punctuation.definition.string.end.apex"}},patterns:[{include:"#xml-character-entity"}]},{name:"string.quoted.double.apex",begin:'\\"',beginCaptures:{0:{name:"punctuation.definition.stringdoublequote.begin.apex"}},end:'\\"',endCaptures:{0:{name:"punctuation.definition.stringdoublequote.end.apex"}},patterns:[{include:"#xml-character-entity"}]}]},"xml-character-entity":{patterns:[{name:"constant.character.entity.apex",match:`(?x)
(&)
(
  (?:[[:alpha:]:_][[:alnum:]:_.-]*)|
  (?:\\#[[:digit:]]+)|
  (?:\\#x[[:xdigit:]]+)
)
(;)`,captures:{1:{name:"punctuation.definition.constant.apex"},3:{name:"punctuation.definition.constant.apex"}}},{name:"invalid.illegal.bad-ampersand.apex",match:"&"}]},"xml-comment":{name:"comment.block.apex",begin:"<!--",beginCaptures:{0:{name:"punctuation.definition.comment.apex"}},end:"-->",endCaptures:{0:{name:"punctuation.definition.comment.apex"}}}},displayName:"Apex"});var n=[e];export{n as default};
