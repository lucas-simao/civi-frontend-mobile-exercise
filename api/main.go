package main

import (
	"math/rand"
	"net/http"
	"time"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"gopkg.in/loremipsum.v1"
)

type Message struct {
	Id        int    `json:"id"`
	Timestamp int64  `json:"timestamp"`
	Subject   string `json:"subject"`
	Detail    string `json:"detail"`
}

var loremIpsumGeneratoe = loremipsum.New()

func main() {
	e := echo.New()

	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{http.MethodGet},
	}))

	e.GET("/messages", func(c echo.Context) error {
		return c.JSON(http.StatusOK, GenerateMessages(10))
	})

	e.Logger.Fatal(e.Start(":9000"))
}

func GenerateMessages(howMany int) (messages []Message) {
	for i := 0; i < howMany; i++ {
		messages = append(messages, Message{
			Id:        rand.Intn(100),
			Timestamp: time.Now().Unix(),
			Subject:   GenerateWord(),
			Detail:    GenerateText(),
		})
	}

	return
}

func GenerateText() string {
	return loremIpsumGeneratoe.Sentence()
}

func GenerateWord() string {
	return loremIpsumGeneratoe.Word()
}
