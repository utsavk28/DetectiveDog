<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://utsavk28.github.io/HostedAssets/DetectiveDogLogo.png" alt="Logo" width="240" >
  </a>

  <h2 align="center">Detective Dog</h2>

  <p align="center">
    Twitter Profile Sentiment Analyzer 
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<h2 id="table-of-contents"> :book: Table of Contents</h2>
<details open="open">
  <summary>Table of Contents</summary>
  <ul>
    <li><a href="#about-the-project">  About The Project</a></li>
    <li><a href="#screenshots">  Screenshots</a></li>
    <li><a href="#tech-stack"> Tech Stack</a></li>
    <li><a href="#models">  Models</a></li>
    <li><a href="#api-reference">  API Reference </a>
        <ul>
            <li><a href="#get-sentiment-using-username">Get Sentiment using Username</a></li>
        </ul>
    </li>
    <li><a href="#roadmap">  Roadmap</a></li>
    <li><a href="#run-locally">  Run Locally</a></li>
    <li><a href="#environment-variables">  Environment Variables</a></li>
    <li><a href="#authors">  Authors</a></li>
    <li><a href="#contributing"> Contributing</a></li>
    <li><a href="#license"> License</a></li>
    <li><a href="#acknowledgements"> Acknowledgements</a></li>
    <li><a href="#related">  Related</a></li>

  </ul>
</details>



![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)    

## About the Project


This Good Boy sniffs out the sentiment from Twitter profile and presents it in an elegant way.\
Or you could also say it as Applying Sentiment Analysis on Twitter Profile and using ChartJs to visualize the result.


![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## Screenshots

![App Screenshot](https://utsavk28.github.io/HostedAssets/DetectiveDog/desktop1.png)

  ![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)
## Tech Stack

**Client:**
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Axios](https://axios-http.com/)
- [ChartJs](https://www.chartjs.org/)
- [Notyf](https://github.com/caroso1222/notyf)

**Server:** 
- [NLTK](https://www.nltk.org/)
- [TextBlob](https://textblob.readthedocs.io/en/dev/)
- [VaderSentiment](https://github.com/cjhutto/vaderSentiment)
- [Sklearn](https://scikit-learn.org/stable/index.html)
- [Tweepy](https://github.com/tweepy/tweepy)
- [Twitter API](https://developer.twitter.com/en)
- [Flask Restful API](https://flask-restful.readthedocs.io/en/latest/)
- [BeautifulSoup](https://pypi.org/project/beautifulsoup4/)


![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png) 

## Models

> DataSet Used for Training : [Sentiment140](https://www.kaggle.com/kazanova/sentiment140)

<table>
	<tr>
	<th colspan="2">
		Model
	</th>
	<th colspan="2" >
		Training
	</th>
	<th colspan="2" >
		Testing
	</th>
	<th >
		API
	</th>
   </tr>
  <tr>
    <th>Name</th>
    <th>Settings</th>
    <th>Accuracy </th>
    <th>F1 Score</th>
    <th>Accuracy</th>
    <th>F1 Score</th>
    <th>Version</th>
  </tr>
  <tr>
	  <td>Textblob</td>
	  <td>Default</td>
	  <td>-</td>
	  <td>-</td>
	  <td>62.24%</td>
	  <td>0.5994</td>
	  <td>v1</td>
  </tr>
    <tr>
	  <td>VaderSentiment</td>
	  <td>Default</td>
	  <td>-</td>
	  <td>-</td>
	  <td>65.19%</td>
	  <td>0.6453</td>
	  <td>v2</td>
  </tr>
    <tr>
	  <td rowspan="2" >Logistic Regression </td>
	  <td>Bag of words & Lemmatization Used</td>
	  <td>79.58%</td>
	  <td>0.8008</td>
	  <td>77.92%</td>
	  <td>0.7859</td>
	  <td>v3-1</td>
  </tr>
     <tr>
	  <td>TF-IDF & Lemmatization Used</td>
	  <td>79.80%</td>
	  <td>0.8015</td>
	  <td>78.11%</td>
	  <td>0.7856</td>
	  <td>v3-2</td>
  </tr>
  <tr>
	  <td rowspan="2" >Bernoulli Naive Bayes </td>
	  <td>Bag of words & Lemmatization Used</td>
	  <td>80.36%</td>
	  <td>0.8051</td>
	  <td>76.98%</td>
	  <td>0.7733</td>
	  <td>v4-1</td>
  </tr>
     <tr>
	  <td>TF-IDF & Lemmatization Used</td>
	  <td>80.36%</td>
	  <td>0.8052</td>
	  <td>76.98%</td>
	  <td>0.7733</td>
	  <td>v4-2</td>
  </tr>
    <tr>
	  <td rowspan="2" >Multinomial Naive Bayes </td>
	  <td>Bag of words & Lemmatization Used</td>
	  <td>80.37%</td>
	  <td>0.8020</td>
	  <td>76.91%</td>
	  <td>0.7680</td>
	  <td>v4-3</td>
  </tr>
     <tr>
	  <td>TF-IDF & Lemmatization Used</td>
	  <td>80.36%</td>
	  <td>0.8051</td>
	  <td>76.98%</td>
	  <td>0.7733</td>
	  <td>v4-4</td>
  </tr>
     <tr>
	  <td rowspan="2">Gradient Boosting Classifier </td>
	  <td>TF-IDF { min_df=5 } & Lemmatization Used . Gradient Boosting Parameters : {lr=1.5, n=150, depth=10}</td>
	  <td>80.03%</td>
	  <td>0.8065</td>
	  <td>77.00%</td>
	  <td>0.7780</td>
	  <td>v5-1</td>
  </tr>
     <tr>
	  <td>TF-IDF { min_df=5 } & Lemmatization Used . Gradient Boosting Parameters : {lr=1.25, n=300, depth=15}</td>
	  <td>-</td>
	  <td>-</td>
	  <td>-</td>
	  <td>-</td>
  </tr>
</table>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## API Reference

#### Get Sentiment using Username

```http
  GET /sentiment-v{x}/<string:username>
```

`{x} is the version number which hosts different ML models. Check Models section for more details`   

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**.  Twitter Profile Username |



![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)
## Roadmap

- [x] Frontend using React
- [x] Backend Model hosting on heroku using Flask Restful API
- [x] Creating Sentiment model using TextBlob & Vader   
- [x] Custom ML Models :
    - [x] Logistic Regression 
    - [x] Naive Bayes 
        - [x] Multinomial
        - [x] Bernoulli
    - [x] Gradient Boosting Classifier
- [ ] Custom DL Models : 
    - [ ] CNN
    - [ ] RNN, LSTM
    - [ ] BERT
- [ ] Refactoring the WebApp Code
- [ ] Update Notebooks 
- [ ] Improve Existing Models

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)
  
## Run Locally

Clone the project

```bash
  git clone https://github.com/utsavk28/DetectiveDog
```

Install dependencies in ```server``` folder.
```bash
  cd server
  python -m venv my-project-env
  source my-project-env/bin/activate
  pip install -r requirements.txt
```
Generate environment variables and fill in the values.

```bash
  cp .env.example .env
```
>  Your  `.env`  is ignored by  `git`, which you can see in  `.gitignore`, and so, it's safe!

Starting Development Server

```bash
  python main.py
```

Install dependencies in ```client``` folder.

```bash
  cd ../client # If you are in ./server
  npm i
```

```
  change API url in ./client/src/utils/api.js to your need
```

Starting Client 

```bash
  npm start
```


At the end of this, you should have

- server running at `http://127.0.0.1:5000/`
- new_client running at `http://localhost:3000/`

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)
  
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY : Twitter API/Consumer Key `

`API_KEY_SECRET : Twitter API/Consumer Secret `

`BEARER_TOKEN : Twitter Bearer Token  `

`ACCESS_TOKEN : Twitter Access Token `

`ACCESS_TOKEN_SECRET : Twitter Access Secret `


![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)
  
## Authors

- [Utsavk28](https://github.com/utsavk28)

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)
 
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are  **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## License

Distributed under the MIT License. See  `LICENSE.txt`  for more information.

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)    

## Acknowledgements

 - Pre-Processing :
 	- [Analytics Vidhya Blog](https://medium.com/analytics-vidhya/pre-processing-tweets-for-sentiment-analysis-a74deda9993e)
 	- [Kaggle NLP 101 Preprocessing](https://www.kaggle.com/redwankarimsony/nlp-101-tweet-sentiment-analysis-preprocessing)
 	- [Medium NLP Preprocessing Blog](https://medium.com/swlh/nlp-text-preprocessing-techniques-ea34d3f84de4)
 - [Machine-Learning-Projects Repo -> Twitter Sentiment Analysis ](https://github.com/aswintechguy/Machine-Learning-Projects/tree/master/Twitter%20Sentiment%20Analysis%20-%20NLP)
 - [ML-ProjectKart -> IMDB Sentiment Analysis](https://github.com/prathimacode-hub/ML-ProjectKart/tree/main/IMDB%20Sentiment%20Analysis)
 - [PaperSpace Gradient Boosting Blog](https://blog.paperspace.com/gradient-boosting-for-classification/)
 - [Flask Restful API Intro. & Deployment Blog ](https://medium.com/analytics-vidhya/flask-restful-api-with-heroku-da1ecf3e04b)
 - [Folder Structure Blog](https://medium.com/analytics-vidhya/folder-structure-for-machine-learning-projects-a7e451a8caaa)
 - [Regex Visualizer](https://regexr.com/)
 - [Regex CheatSheet](https://www.rexegg.com/regex-quickstart.html)
 - [Word Embedding Word2Vec](https://radimrehurek.com/gensim/models/word2vec.html#introduction)
 - [StackEdit](https://stackedit.io/app#)

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)  


## Further Reading

 - [Sentiment Analysis using 7 techniques Kaggle](https://www.kaggle.com/parth05rohilla/sentiment-analysis-using-7-different-techniques)
 - [Twitter Sentiment Analysis using Word2Vec Word Embedding](https://towardsdatascience.com/predicting-tweet-sentiment-with-word2vec-embeddings-67aace9b019d)
 - [Deep Convolutional Neural Network for Sentiment Analysis](https://machinelearningmastery.com/develop-word-embedding-model-predicting-movie-review-sentiment/)

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)  


## Related 

Here are some related projects

- [Machine-Learning-Projects](https://github.com/aswintechguy/Machine-Learning-Projects)
- [ML-ProjectKart](https://github.com/prathimacode-hub/ML-ProjectKart)

  
<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/utsavk28/DetectiveDog/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/utsavk28/DetectiveDog/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/utsavk28/DetectiveDog/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/utsavk28/DetectiveDog/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/utsavk28/DetectiveDog/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/utsav-khatu-431b741bb/
