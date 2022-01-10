package main

import (
	"testing"
)

func TestGenerateMessages(t *testing.T) {
	howMany := 10
	got := GenerateMessages(howMany)

	if len(got) < 10 {
		t.Errorf("GenerateMessages(%d) = %d; want %d", howMany, len(got), howMany)
	}
}

func TestGenerateText(t *testing.T) {
	got := GenerateText()

	if got == "" {
		t.Errorf("GenerateText() = empty; want not empty")
	}
}

func TestGenerateWord(t *testing.T) {
	got := GenerateWord()

	if got == "" {
		t.Errorf("GenerateWord() = empty; want not empty")
	}
}
