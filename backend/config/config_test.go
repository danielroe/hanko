package config

import (
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"os"
	"reflect"
	"testing"
)

func TestDefaultConfigNotEnoughForValidation(t *testing.T) {
	cfg := DefaultConfig()
	if err := cfg.Validate(); err == nil {
		t.Error("The default config is missing mandatory parameters. This should not validate without error.")
	}
}

func TestParseValidConfig(t *testing.T) {
	configPath := "./config.yaml"
	cfg, err := Load(&configPath)
	if err != nil {
		t.Error(err)
	}
	if err := cfg.Validate(); err != nil {
		t.Error(err)
	}
}

func TestMinimalConfigValidates(t *testing.T) {
	configPath := "./minimal-config.yaml"
	cfg, err := Load(&configPath)
	if err != nil {
		t.Error(err)
	}
	if err := cfg.Validate(); err != nil {
		t.Error(err)
	}
}

func TestRateLimiterConfig(t *testing.T) {
	configPath := "./minimal-config.yaml"
	cfg, err := Load(&configPath)

	if err != nil {
		t.Error(err)
	}
	cfg.RateLimiter.Enabled = true
	cfg.RateLimiter.Store = "in_memory"

	if err := cfg.Validate(); err != nil {
		t.Error(err)
	}

	cfg.RateLimiter.Store = "redis"
	if err := cfg.Validate(); err == nil {
		t.Error("when specifying redis, the redis config should also be specified")
	}
	cfg.RateLimiter.Redis = &RedisConfig{
		Address:  "127.0.0.1:9876",
		Password: "password",
	}
	if err := cfg.Validate(); err != nil {
		t.Error(err)
	}

	cfg.RateLimiter.Store = "notvalid"
	if err := cfg.Validate(); err == nil {
		t.Error("notvalid is not a valid backend")
	}
}

func TestEnvironmentVariables(t *testing.T) {
	err := os.Setenv("PASSCODE_SMTP_HOST", "valueFromEnvVars")
	require.NoError(t, err)

	err = os.Setenv("SERVER_PUBLIC_CORS_ALLOW_METHODS", "GET,PUT,POST,DELETE")
	require.NoError(t, err)

	configPath := "./minimal-config.yaml"
	cfg, err := Load(&configPath)
	require.NoError(t, err)

	assert.Equal(t, "valueFromEnvVars", cfg.Passcode.Smtp.Host)
	assert.True(t, reflect.DeepEqual([]string{"GET", "PUT", "POST", "DELETE"}, cfg.Server.Public.Cors.AllowMethods))
}