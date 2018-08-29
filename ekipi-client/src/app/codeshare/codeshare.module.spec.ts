import { CodeshareModule } from './codeshare.module';

describe('CodeshareModule', () => {
  let codeshareModule: CodeshareModule;

  beforeEach(() => {
    codeshareModule = new CodeshareModule();
  });

  it('should create an instance', () => {
    expect(codeshareModule).toBeTruthy();
  });
});
