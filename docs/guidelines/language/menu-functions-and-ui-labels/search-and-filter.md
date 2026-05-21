# Search and filter

> Industrial applications handle large datasets where users need to find specific elements, parts or documents quickly. Clear, consistent language in search interfaces helps users find what they need efficiently and reduces errors in time-sensitive industrial environments.

#

## Basic search

Use “Search” as the primary action label and avoid vague, long or technical alternatives.

- Search
- Search equipment

- Go
- Find

Use clear, specific placeholder text that indicates what users can search for in the current context.

- Search by equipment ID, serial number or location…
- Search parts by name, part number or category…
- Search…

- Enter search
- Type here 

## Advanced search and filter

Use “Advanced search” to provide access to additional search options.

- Advanced search 

- Additional 
- Detailed search

Use “Filter by” followed by the specific attribute to make filtering options immediately clear.

- Filter by machine type
- Filter by date range

- Filters

Use prominent, one-click filter options for the most common filtering needs when possible.

- Quick filters: Active | Needs maintenance | Critical
- Show: All | Active only | Inactive only

Use “Apply filters” as the primary action label.

- Apply filters

- Filter
- Set filters
- Find

Use “Clear" or “Clear filters” to remove all active filters at once.

- Clear 
- Clear filters

- Remove all
- Reset
- Clear

Indicate whether filters will persist across sessions.

- Filters remain active until you clear them.
- Filters reset when you log out.
- Filters will be saved for your next session. 

- Filters may persist. 

## Displaying results

Use clear wording when there are no results found. 

- No results.
- No results found for “valve”.
- No matching equipment found. 
- No results. Refine search.  
- No results. Try adjusting your filters and search terms.  

- Failed 
- Nothing found. 
- Empty. 

Use specific numbers and clear language to show how many results were found.

- Showing 47 of 230 machines
- 12 results found for “pressure valve”

- 47 items

Include both total page count and current position when using pagination.

- Page 2 of 15
- Showing 1-50 of 730 results

- Next
- Previous

Use “Display X results per page” or “Results per page” to allow users to adjust display quantity.

- Results per page: 50
- Display 50 results per page

- Display: 50
- 50

## Refining results 

Use “Narrow search” or “Adjust filters” when users can narrow existing search results.

- Narrow search
- Adjust filters

- Refine results 
- Modify results

Use “Expand search” when users can broaden their search. 

- Expand search to all locations
- Show more results 

- Broaden results 

Use “Sort by” followed by the sorting criterion to make ordering options clear.

- Sort by: Date (newest to oldest)
- Sort by: Equipment name (a-z)
- Sort by: Priority (high to low)

- Order by

## Search suggestions and unsuccessful searches

Use actionable language when no results are found to guide users forward.

- Nothing found. Refine search.
- No alarms found in selected period. Expand period. 
- No equipment found. Adjust your filters or search terms.
- No alarms found in selected time range. Try expanding the date range. 

- 0 results
- Nothing found
- Your search returned no results

Use “Did you mean” or “Suggestions” to help users correct spelling errors or find related terms.

- Did you mean “turbine”?
- No results for “pymp”. Did you mean “pump”?
- Suggestions: motor, engine, generator

- Try: turbine

Use specific, actionable error messages when search operations fail.

- Unable to complete search. Check your connection and try again.
- Search timeout. Narrow your search criteria.

- Search failed.
- Something went wrong.

## Search history 

Use “Recent searches” or “Search history” to display previously entered search terms.

- Recent searches

- Previous
- History

Use “Save search” or “Save search criteria” to allow users to store frequently used searches.

- Save search.
- Save search criteria as “Active pumps in Building A”

- Save
- Store
- Remember search

## Conditional filtering for complex searches

Use clear labels for logical operators (AND, OR, NOT) that explain how conditions combine.

- Status: Active AND Location: Munich
- Type: Pump OR Type: Compressor

- Active & Munich

Provide templates for common conditional searches.

- Template: Active equipment needing maintenance 
Status: Active AND Maintenance: Due
- Template: High priority work orders for team A 
Priority: High AND Assigned team: Team A
- Template: Temperature readings 
Sensor: Temperature AND Value: &gt; 100

Tell users when conditions create impossible or contradictory queries.

- Status cannot be both Active AND Inactive. Refine filter.
- This combination will return no results. Refine filter.

- Invalid search

## Dos and Don’ts

- Do provide simple examples or templates for common conditional searches to help users get started
- Do offer actionable next steps and helpful suggestions when searches fail or return no results
- Don’t provide unhelpful “Try again” recommendations that provide no guidance on what to do next
- Don’t use generic or vague labels like “Go”, “Find” or “Error” 

## Related

- [Progress updates](../messaging/progress-updates.mdx)
- [Empty-state messages](../messaging/empty-state-messages.mdx)
- [Spinner (component)](../../../components/spinner/index.mdx)
- [Category filter (component)](../../../components/category-filter/guide.md)
- [Expandable search (component)](../../../components/expanding-search/code.mdx)
