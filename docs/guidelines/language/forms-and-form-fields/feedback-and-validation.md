# Feedback and validation

> Field input validation gives users feedback on their input to ensure accurate, consistent data is submitted. Careful wording is required here to ensure users do not feel stupid or shamed for getting it wrong.

#

Provide any requirements first as helper / info text to avoid users falling immediately into invalid states. See [Forms validation (component)](../../../components/forms-validation/guide.md).

![UI example showing a field label Phone number with the helper text Include country code, e.g. +49 30 1234567](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8399-8833&t=EjTZKAJDhIkv5ICF-4)

  
    
      Field label: Phone number
      Helper text: Include country code, e.g. +49 30 1234567
    
  
  
    
      Field label: Password*
      Helper text: (empty and requirement only appears after user starts typing) Invalid: Password must have 8 characters.
    
  

Provide clear, valid wording when users have met all the validation criteria and can move on.

![UI example showing a field label Username* with the valid text Username available.](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8392-12664&t=EjTZKAJDhIkv5ICF-4)

  
    
      Field label: Username*
      Valid text: Username available
    
  
  
    
      Field label: Username*
      Valid text: OK
    
  

Provide invalid text when user input has not met the specified requirements and explain exactly what requirement is missing.

![UI example showing a field label Username* with the invalid text Username unavailable.](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8399-8321&t=EjTZKAJDhIkv5ICF-4)

  
    
      Field label: Username*
      Invalid text: Username unavailable
      Field label: Email address
      Invalid text: Missing @ symbol
    
  
  
    
      Field label: Username*
      Invalid text: Bad username
      Field label: Email address
      Invalid text: Invalid email address
    
  

Provide warning text when there is a critical issue or a suggestion related to the success or failure of the user input and explain any consequences clearly.

![UI example showing a field Upload file with the warning text Upload max 10 MB. Select another file.](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8484-6760&t=DqVZwQbqqLyQk2S8-4)

  
    
      Field label: Upload file
      Warning text: Upload max 10 MB. Select another file.
      Field label: Temperature
      Warning text: Hot water temperature limit is too high. There is a risk of scalding.
    
  
  
    
      Field label: Password
      Warning text: Warning: This is a weak password and not secure.
      Field label: Min threshold
      Warning text: Warning! Wrong threshold!
    
  

## Dos and Don'ts

  
    
      Do provide all the information users need upfront
      Do ensure all constraints are clear
    
  
  
    
      Don't shame users for making a mistake
      Don't use wording that makes users feel stupid when their input is invalid
    
  

## Related

- [Forms validation (component)](../../../components/forms-validation/guide.md)
- [Error messages](../messaging/error-messages.mdx)
- [Warning messages](../messaging/warning-messages.mdx)
- [Non-critical information messages](../messaging/non-critical-information-messages.mdx)
- [Tooltips](../messaging/tooltips.mdx)
