export const HandleHomeEvents = (e) => {
  let ServiceLeftArrows = document.querySelector(".service-left-arrow");
  let ProviderLeftArrows = document.querySelector(".provider-left-arrow");
  let ServiceRightArrows = document.querySelector(".service-right-arrow");
  let ProviderRightArrows = document.querySelector(".provider-right-arrow");
  let NewsLeftArrows = document.querySelector(".news-left-arrow");
  let NewsRightArrows = document.querySelector(".news-right-arrow");
  let CompaniesLeftArrows = document.querySelector(".companies-left-arrow");
  let CompaniesRightArrows = document.querySelector(".companies-right-arrow");
  let ServiceMovement = 0,
    PopularMovement = 0,
    NewsMovment = 0,
    BrandsMovment = 0;
  const HandleServiceMovment = (action) => {
    if (action == "plus") {
      ServiceMovement = ServiceMovement + 300;
    } else {
      if (ServiceMovement > 0) {
        ServiceMovement = ServiceMovement - 300;
      }
    }
    document.querySelector(
      ".services-reel"
    ).style.transform = `translateX(-${ServiceMovement}px)`;
  };

  const HandlePopularMovement = (action) => {
    if (action == "plus") {
      PopularMovement = PopularMovement + 300;
    } else {
      if (PopularMovement > 0) {
        PopularMovement = PopularMovement - 300;
      }
    }

    document.querySelector(
      ".popular-reel"
    ).style.transform = `translateX(-${PopularMovement}px)`;
  };

  const HandleNewsMovment = (action) => {
    if (action == "plus") {
      NewsMovment = NewsMovment + 100;
    } else {
      if (NewsMovment > 0) {
        NewsMovment = NewsMovment - 100;
      }
    }
    console.log("working");
    document.querySelector(
      ".news-reel"
    ).style.transform = `translateX(-${NewsMovment}%)`;
  };

  const HandleCompaniesMovement = (action) => {
    if (action == "plus") {
      BrandsMovment = BrandsMovment + 300;
    } else {
      if (BrandsMovment > 0) {
        BrandsMovment = BrandsMovment - 300;
      }
    }

    document.querySelector(
      ".companies-reel"
    ).style.transform = `translateX(-${BrandsMovment}px)`;
  };

  ServiceLeftArrows.addEventListener("click", (e) =>
    HandleServiceMovment("plus")
  );
  ServiceRightArrows.addEventListener("click", (e) =>
    HandleServiceMovment("minus")
  );

  ProviderLeftArrows.addEventListener("click", (e) =>
    HandlePopularMovement("plus")
  );
  ProviderRightArrows.addEventListener("click", (e) =>
    HandlePopularMovement("minus")
  );

  NewsLeftArrows.addEventListener("click", (e) => HandleNewsMovment("plus"));
  NewsRightArrows.addEventListener("click", (e) => HandleNewsMovment("minus"));
  CompaniesLeftArrows.addEventListener("click", (e) =>
    HandleCompaniesMovement("plus")
  );
  CompaniesRightArrows.addEventListener("click", (e) =>
    HandleCompaniesMovement("minus")
  );
  // NewsRightArrows
};
