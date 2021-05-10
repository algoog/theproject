export const HandleDiscoverEvents = (e) => {
  let ServiceLeftArrows = document.querySelector(".service-left-arrow");

  let ServiceRightArrows = document.querySelector(".service-right-arrow");

  let ServiceMovement = 0,
    HandleServiceDiscoverMovment = (action) => {
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

  ServiceLeftArrows.addEventListener("click", (e) =>
    HandleServiceDiscoverMovment("plus")
  );
  ServiceRightArrows.addEventListener("click", (e) =>
    HandleServiceDiscoverMovment("minus")
  );
};
