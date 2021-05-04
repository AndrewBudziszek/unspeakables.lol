import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import latin from '../libs/latin'
import badWords from '../libs/bad_words'
import axios from 'axios'
import { Link } from '@material-ui/core'

const Shuffler = ({ backgroundColorCallback = () => { } }) => {
    const [latinIndex, setLatinIndex] = useState(0);
    const [currentWord, setCurrentWord] = useState("unspeakables.lol");
    const [isShuffling, setIsShuffling] = useState(false);
    const [shufflingIterations, setShufflingIterations] = useState(0);
    const [currentWordDescription, setCurrentWordDescription] = useState("");
    const [gotNewWord, setGotNewWord] = useState(true);
    const [wordPermalink, setWordPermalink] = useState("");

    var options = {
        method: 'GET',
        url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
        params: { term: currentWord },
        headers: {
            'x-rapidapi-key': '08e886ca04msh660dbe4641f15c7p114b61jsne0fb36ceceaa',
            'x-rapidapi-host': 'mashape-community-urban-dictionary.p.rapidapi.com'
        }
    };

    useEffect(() => {
        if (isShuffling) {
            const interval = setInterval(async () => {
                setLatinIndex(Math.floor(Math.random() * (latin.length - 1)));
                setShufflingIterations(shufflingIterations => shufflingIterations + 1);
                setCurrentWord(latin[latinIndex]);
                // backgroundColorCallback("hsl(" + 360 * Math.random() + ',' +
                //     (25 + 70 * Math.random()) + '%,' +
                //     (85 + 10 * Math.random()) + '%)')
                if (shufflingIterations > 20) {
                    setShufflingIterations(0);
                    setIsShuffling(false);
                    setCurrentWord(badWords[Math.floor(Math.random() * (badWords.length - 1))]);
                    setGotNewWord(false);
                }
            }, 50);
            return () => clearInterval(interval);
        }
    })

    useEffect(async () => {
        const fetchData = async () => {
            await axios.request(options).then(response => {
                const description = response.data["list"][0].definition;
                const permalink = response.data["list"][0].permalink;

                setCurrentWordDescription(description);
                setWordPermalink(permalink);
                setGotNewWord(true)
            }).catch(error => {
                console.error(error)
                setGotNewWord(true);
            })
        }
        await fetchData();
    }, [!gotNewWord])

    return (
        <div className='unspeakables'>
            <h1>{currentWord}</h1>
            { currentWordDescription ? (
                <>
                    <p>{currentWordDescription.replaceAll("[", "").replaceAll("]", "")}</p>
                    <Link href={wordPermalink} target="_blank" variant="body2">
                        permalink
                    </Link>
                    <br />
                </>
            ) : ''
            }
            <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={() => {
                    setIsShuffling(true);
                    setCurrentWordDescription('')
                }}
            >
                lol
            </Button>
            <br />
        </div>
    )
};

export default Shuffler