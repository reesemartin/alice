# Alice : Personal Assistant

##Built using:  
- Google Cloud Speech API
- Sonus : https://github.com/evancohen/sonus


You will likely get an error starting app about "Error: libcblas.so.3: cannot open shared object file: No such file or directory". Be sure to run:  
```
sudo apt-get install libatlas-base-dev
```

ToDo:

Add class wrapper for all of these custom things

Add method for adding multiple triggers to a single command instead of retyping them

Add method for responding with inflections

Automate adding option hotword to sub conversation commands

For her translations, create a map of ISO codes that should use which voice to speak them so that she can speak mandarin (right now she just prints the word but says nothing)