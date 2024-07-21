const nfts = document.getElementById("nfts")
const trends = document.getElementById("trends")
const trendsTab = document.getElementById("trendsTab")
const nftsTab = document.getElementById("nftsTab")

const openTrends = (e) => {
  trends.classList.remove("close")
  nfts.classList.add("close")
  trendsTab.classList.remove("open")
  nftsTab.classList.add("open")
}


const openNft = (e) => {
  nftsTab.classList.remove("open")
  trendsTab.classList.add("open")
  nfts.classList.remove("close")
  trends.classList.add("close")
}