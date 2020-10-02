const util = require('util')
const exec = util.promisify(require('child_process').exec)

//timestamp=$(git show -s --format=%ct)
//date=$(git show -s --format=%cI); snap run scc --format json | jq ".[] | { name: .Name, lines: .Lines, timestamp: ${timestamp}, date: \"${date}\"}"

async function getLocData(){
  const commits = []
  const config = {
    type: 'line',
    data: {
      labels: [],
      datasets: []
    },
		options: {
			responsive: true,
			title: {
				display: true,
				text: 'Lines of Code in Git Repository'
			},
			scales: {
				xAxes: [{
					display: true,
          scaleLabel: {
            display: true,
            labelString: 'Date'
          },
				}],
				yAxes: [{
					display: true,
					type: 'logarithmic',
          scaleLabel: {
							display: true,
							labelString: 'Lines of Code'
					},
          ticks: {
            min: 0,
            suggestedMax: 10000,
            callback: function (value, index, values) {
              if (value === 1000000) return "1M"
              if (value === 100000) return "100K"
              if (value === 10000) return "10K"
              if (value === 1000) return "1K"
              if (value === 100) return "100"
              if (value === 10) return "10"
              if (value === 0) return "0"
              return null;
           }
          }
			  }]
			}
		}
  }
  var languages = []
  const gitLog = await exec('git log')
    .then((res) => {
      return res.stdout.matchAll(/commit (?<hash>.*)/g)
    })
  for (commit of gitLog){
    await exec(`git checkout ${commit.groups.hash}`)
    const obj = {
      date: (await exec('git show -s --format=%cI')).stdout,
      hash: commit.groups.hash,
      linesOfCode: JSON.parse((await exec('snap run scc --format json')).stdout, null, 2),
//      linesOfCode: (await exec('snap run scc --format json')).stdout,
      timestamp: (await exec('git show -s --format=%ct')).stdout,
    }
    commits.unshift(obj)
  }

  await exec(`git checkout ${commits[commits.length - 1].hash}`)

  commits.forEach((commit) => {
    commit.linesOfCode.forEach((language) => {
      if (languages.indexOf(language.Name) < 0){
        languages.push(language.Name)
      }
    })
  })
  languages.forEach(language=>{
    const red = Math.round(0 + Math.random()*255)
    const green = Math.round(0 + Math.random()*255)
    const blue = Math.round(0 + Math.random()*255)
    const opacity = (0.8 + Math.random() / 5).toPrecision(2)

    color = `rgba(${red},${green},${blue},${opacity})`
    obj = {
      label: language,
      backgroundColor: color,
      borderColor: color,
      fill: false,
      data: []
    }
    config.data.datasets.push(obj)
  })
  commits.forEach((commit) => {
    config.data.labels.push(commit.date)
    languages.forEach((language) => {
        const index = config.data.datasets.findIndex((obj)=>{
          return obj.label === language
        })
      const languageStats = commit.linesOfCode.find((obj)=>{return obj.Name === language})
      if(languageStats){
        config.data.datasets[index].data.push(languageStats.Lines)
      } else {
        config.data.datasets[index].data.push(0)
      }
    })
  })
  const json = JSON.stringify(config)
  console.log(json)
}
getLocData()
  
/*
	window.onload = function() {
		var ctx = document.getElementById('canvas').getContext('2d');
		window.myLine = new Chart(ctx, config);
    
    inputNode = document.getElementById('chart')
    outputNode = document.getElementById("outputNode")
    setTimeout(function(){ 
          domtoimage.toPng(inputNode)
      .then(function (dataUrl) {
          var img = new Image();
          img.src = dataUrl;
          document.body.appendChild(img)
      })
      .catch(function (error) {
          console.error('oops, something went wrong!', error);
      });
    }, 3000)

	}

/*
 * SVG
 *


	window.onload = function() {
    var ctx = document.getElementById('canvas').getContext('2d');
    window.myLine = new Chart(ctx, config);

    inputNode = document.getElementById('canvas')
    outputNode = document.getElementById("outputNode")
    setTimeout(function(){ 
      domtoimage.toSvg(inputNode)
        .then(function (dataUrl) {
          outputNode.innerText = dataUrl
        })
    }, 2000)
  }
*/
