# Alice : Personal Assistant

## v1 Built using:
- Google Cloud Speech API
- annyang : https://github.com/TalAter/annyang
- ResponsiveVoice.JS : https://responsivevoice.org/

### v1 ToDo:

Add class wrapper for all of these custom things

Add method for adding multiple triggers to a single command instead of retyping them

Add method for responding with inflections

Automate adding option hotword to sub conversation commands

For her translations, create a map of ISO codes that should use which voice to speak them so that she can speak mandarin (right now she just prints the word but says nothing)


## v2 Built using:
- Dialogflow : https://dialogflow.com

You need to add your own config.json file containing:
```
{
    "dialogflow_accessToken" : "YOUR ACCESS TOKEN"
}
```
we dont include it here for obvious security reasons
