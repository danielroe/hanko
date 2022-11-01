package dto

import "time"

type PasscodeFinishRequest struct {
	Id   string `json:"id" validate:"required,uuid4"`
	Code string `json:"code" validate:"required"`
}

type PasscodeInitRequest struct {
	UserId  string  `json:"user_id" validate:"required,uuid4"`
	EmailId *string `json:"email_id"` // TODO: How to validate optional field
}

type PasscodeReturn struct {
	Id        string    `json:"id"`
	TTL       int       `json:"ttl"`
	CreatedAt time.Time `json:"created_at"`
}
