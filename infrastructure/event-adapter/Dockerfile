FROM golang:1.24.10-alpine AS build
WORKDIR /src
COPY go.mod ./
COPY . .
RUN CGO_ENABLED=0 go build -trimpath -ldflags="-s -w" -o /event-adapter .

FROM gcr.io/distroless/static-debian12:nonroot
COPY --from=build /event-adapter /event-adapter
EXPOSE 8090
ENTRYPOINT ["/event-adapter"]
