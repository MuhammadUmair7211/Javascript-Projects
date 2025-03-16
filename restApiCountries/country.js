const countryName = new URLSearchParams(location.search).get("name");
const borderCountries = document.querySelector(".border");
const main = document.querySelector(".main");
fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
	.then((res) => res.json())
	.then((data) => {
		data.forEach((country) => {
			country.borders.forEach((border) => {
				fetch(`https://restcountries.com/v3.1/alpha/${border}`)
					.then((res) => res.json())
					.then(([data]) => {
						if (data.borders) {
							const borderCountryTag = document.createElement("a");
							borderCountryTag.innerHTML = data.name.common;
							borderCountryTag.href = `country.html?name=${data.name.common}`;
							borderCountries.appendChild(borderCountryTag);
						}
					});
			});
			const countryDetails = document.createElement("div");
			countryDetails.classList.add("country-details");
			countryDetails.innerHTML = `<div class="country-details">
            <img src="${country.flags.svg}" alt="${country.name.common}">
            <div class="country-text-container">
                <h1>${country.name.common}</h1>
                <div class="details-text">
                    <p><b>Native Name: </b>${
											Object.values(country.name.nativeName)[0].common
										}</p>
                    <p><b>Population: </b>${country.population.toLocaleString()}</p>
                    <p><b>Region: </b>${country.region}</p>
                    <p><b>Sub-Region: </b>${country.subregion}</p>
                    <p><b>Capital: </b>${country.capital}</p>
                    <p><b>Top Level Domain: </b>${country.tld}</p>
                    <p><b>Currencies: </b>${
											Object.values(country.currencies)[0].name
										}</p>
                    <p><b>Languages: </b>${Object.values(country.languages)}</p>
                    <p><b>UN Member: </b>${country.unMember}</p>
                    <p><b>Land-Locked: </b>${country.landlocked}</p>
                </div>
                <div class="border">
					
                </div>
            </div>
        </div>`;
			main.appendChild(countryDetails);
		});
	});
