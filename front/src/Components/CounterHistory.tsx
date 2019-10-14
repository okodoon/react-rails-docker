import * as React from 'react';
import { Container, Label } from 'semantic-ui-react';

// const range = (n: number) => (n < 0 ? [] : Array.from(Array(n), (_, i) => i));

export interface CounterHistoryProps {
  count?: number;
}

const CounterHistory: React.SFC<CounterHistoryProps> = ({ count = 0 }) => (
  <Container className="beads-box">
    <Label >aaa</Label>
  </Container>
);

export default CounterHistory;