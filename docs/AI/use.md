# Using & Setup AI
## Setup

1. Use command `/set channels`
2. Choose options:
    1.  `ai-channel`: Channel where the users can use AI
    2.  Other options are optional

## Whitelist

!!! danger

    Some generated photos may be inappropriate for other users.
    We are recommending marking the channel as NSFW.

!!! info

    SkyndalexAI is using models from huggingface platform. Model's list:
| Model                                                                                                                                    | Use                  |
|------------------------------------------------------------------------------------------------------------------------------------------|----------------------|
| [`[microsoft/DialoGPT-large]`](https://api-inference.huggingface.co/models/microsoft/DialoGPT-large)                                     | Text generation      |
| [`[openskyml/dalle-3-xl]`](https://api-inference.huggingface.co/models/openskyml/dalle-3-xl)                                             | Image generation     |
| [`[Salesforce/blip-image-captioning-large]`](https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-large")        | Image classification |


To use text generation, simply send a message on the channel which has been set throught `/set channels` command. 
To generate an image, enter the phrase **--genimg [input]** on the same channel. 
For image classification, simply send one or more images on the channel.
If the bot detects that the user has sent more than 1 image, it will then use embed pagination to display all the classified images by AI.

## Summary

1. Send a message on the channel to use text generation
2. Enter the phrase **--genimg [input]** on the same channel to generate an image
3. Send one or more images on the channel to use image classification