(function (window, document) {
    "use strict";
  
    const search = (e) => {
      const results = window.searchIndex.search(e.target.value, {
        bool: "OR",
        expand: true,
      });
  
      const resEl = document.getElementById("searchResults");
      const noResultsEl = document.getElementById("noResultsFound");
  
      
      if (results) {
        noResultsEl.style.display = "none";
        results.map((r) => {

            const { slug, title, description } = r.doc;
            
            resEl.innerHTML = `
            <div class="card mb-3 p-0">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="{{ image }}" class="img-fluid rounded-start" alt="{{ imageAlt }}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h6>
                                ${slug}
                                <a href="${slug}" class="card-title">${title}</a>
                            </h6>
                            <div class="footer d-flex justify-content-between">
                                <div class="author d-flex align-items-center me-3">
                                    <img src="/assets/icon/ic_author.svg" alt="{{ imageAlt }}">
                                    <small class="text-muted ms-2">{{ author }}</small>
                                </div>
                                <div class="calendar d-flex align-items-center">
                                    <img src="/assets/icon/ic_calendar.svg" alt="{{ imageAlt }}">
                                    <small class="text-muted ms-2">{{ date | dateFilter }}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        });
      } else {
        noResultsEl.style.display = "block";
      }
    };
  
    fetch("/search.json").then((rawIndex) => {
        window.searchIndex = elasticlunr.Index.load(rawIndex);
        document.getElementById("searchField").addEventListener("input", search);
      })
  })(window, document);
  