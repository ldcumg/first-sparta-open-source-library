const EventBus = () => {
  const topics = new Map();

  const subscribe = (topic, listener) => {
    if (!topics.has(topic)) {
      topics.set(topic, []);
    }
    topics.get(topic).push(listener);
  };

  const unsubscribe = () => {
    if (!topics.size) return;
    topics.clear();
  };

  const publish = (topic, data) => {
    if (!topics.has(topic)) return;
    topics.get(topic).forEach((listener) => listener(data));
  };

  return { subscribe, unsubscribe, publish };
};

export default EventBus();