tell application "Dia"
	set theUrl to URL of first tab of front window whose isFocused is true
end tell

set apiKey to "{popclip option apiKey}"
set noteText to "{popclip text}"
set shouldOpen to "{popclip option openAfterSave}"


-- 转义引号
set noteText to my replaceText(noteText, "\"", "\\\"")
set theUrl to my replaceText(theUrl, "\"", "\\\"")

set jsonData to "{\"data\":{\"url\":\"" & theUrl & "\",\"note\":\"" & noteText & "\"}}"

set curlCommand to "curl -X POST 'https://my.minttr.com/api/v1/link' " & ¬
	"-H 'Authorization: Bearer " & apiKey & "' " & ¬
	"-H 'Content-Type: application/json' " & ¬
	"-d '" & jsonData & "' "

try
	do shell script curlCommand
    if shouldOpen is "1" then
        do shell script "open 'https://my.minttr.com'"
    end if
	return "✓ Saved to Minttr" & shouldOpen
on error errMsg
	error "Failed to save: " & errMsg
end try

on replaceText(theText, oldString, newString)
	set AppleScript's text item delimiters to oldString
	set textItems to text items of theText
	set AppleScript's text item delimiters to newString
	set theText to textItems as text
	set AppleScript's text item delimiters to ""
	return theText
end replaceText

